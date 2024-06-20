package portalcore

import (
	"context"
	_ "embed"
	"encoding/json"
	"fmt"
	"io"
	"net"
	"net/http"
	"runtime"

	wailsruntime "github.com/wailsapp/wails/v2/pkg/runtime"
)

type NextAuthSession struct {
	User struct {
		Name  string `json:"name"`
		Email string `json:"email"`
		Image string `json:"image"`
		Id    string `json:"id"`
	} `json:"user"`
	Expires string `json:"expires"`
}

//go:embed auth.html
var authHtml []byte

type Core struct {
	ctx context.Context

	authListener *net.Listener /* 認証プロセスリスナー */
}

func NewCore() *Core {
	return &Core{}
}

func (c *Core) SetContext(ctx context.Context) {
	c.ctx = ctx
}

func (c *Core) GetOS() string {
	switch runtime.GOOS {
	case "windows":
		return "windows"
	case "darwin":
		return "macos"
	default:
		return "undetermined"
	}
}

func (c *Core) SignIn() {
	// ブラウザで認証ページを開く
	wailsruntime.BrowserOpenURL(c.ctx, "http://localhost:3000/api/auth/signin")

	// すでに認証プロセスが実行中の場合、ここで終了
	if c.authListener != nil {
		return
	}

	// リスナーを作成
	listener, err := net.Listen("tcp", "localhost:8080")
	if err != nil {
		return
	}
	defer listener.Close()

	c.authListener = &listener
	defer func() {
		c.authListener = nil
	}()

	// 認証サーバーからのコールバックを待つ
	conn, err := listener.Accept()
	if err != nil {
		return
	}
	defer conn.Close()

	// レスポンスを送信
	response := "HTTP/1.1 200 OK\r\n" +
		"Content-Type: text/html\r\n" +
		"Connection: close\r\n" +
		"\r\n" +
		string(authHtml)
	_, err = conn.Write([]byte(response))
	if err != nil {
		return
	}

	// リクエストを読み取る
	buffer := make([]byte, 1024)
	n, err := conn.Read(buffer)
	if err != nil {
		return
	}
	requestContent := string(buffer[:n])
	fmt.Println("Received request:", requestContent)

	sessionToken := ""
	session, err := c.getSession(sessionToken)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Printf("%+v\n", session)

	wailsruntime.EventsEmit(c.ctx, "portal-core.onSessionTokenUpdate", session)
}

func (c *Core) getSession(sessionToken string) (NextAuthSession, error) {
	var session NextAuthSession

	req, err := http.NewRequest("GET", "http://localhost:3000/api/auth/session", nil)
	if err != nil {
		return session, fmt.Errorf("error creating request: %w", err)
	}
	req.Header.Set("Accept", "application/json")
	req.Header.Set("User-Agent", "DemoClient/1.0.0")
	req.Header.Set("Cookie", "next-auth.session-token="+sessionToken+";")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return session, fmt.Errorf("error making request: %w", err)
	}
	defer func() {
		io.Copy(io.Discard, resp.Body)
		resp.Body.Close()
	}()

	body, _ := io.ReadAll(resp.Body)
	if err := json.Unmarshal(body, &session); err != nil {
		return session, fmt.Errorf("error: %w", err)
	}

	return session, nil
}
