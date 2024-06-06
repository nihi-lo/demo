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
		Name  string `json:"user"`
		Email string `json:"email"`
		Image string `json:"image"`
		Id    string `json:"id"`
	} `json:"user"`
	Expires string `json:"expires"`
}

//go:embed response.html
var responseHtml []byte

type PortalCore struct {
	ctx context.Context

	authListener *net.Listener /* 認証プロセスリスナー */
}

func NewPortalCore() *PortalCore {
	return &PortalCore{}
}

func (p *PortalCore) SetContext(ctx context.Context) {
	p.ctx = ctx
}

func (p *PortalCore) GetOS() string {
	switch runtime.GOOS {
	case "windows":
		return "windows"
	case "darwin":
		return "macos"
	default:
		return "undetermined"
	}
}

func (p *PortalCore) SignIn() {
	// ブラウザで認証ページを開く
	wailsruntime.BrowserOpenURL(p.ctx, "http://localhost:3000/api/auth/signin")

	// すでに認証プロセスが実行中の場合、ここで終了
	if p.authListener != nil {
		return
	}

	// リスナーを作成
	listener, err := net.Listen("tcp", "localhost:8080")
	if err != nil {
		return
	}
	defer listener.Close()

	p.authListener = &listener
	defer func() {
		p.authListener = nil
	}()

	// 認証サーバーからのコールバックを待つ
	conn, err := listener.Accept()
	if err != nil {
		return
	}
	defer conn.Close()

	// リクエストを読み取る
	buffer := make([]byte, 1024)
	n, err := conn.Read(buffer)
	if err != nil {
		return
	}

	// リクエスト内容を出力
	requestContent := string(buffer[:n])
	fmt.Println("Received request:", requestContent)

	// レスポンスを送信
	response := "HTTP/1.1 200 OK\r\n" +
		"Content-Type: text/html\r\n" +
		"Connection: close\r\n" +
		"\r\n" +
		string(responseHtml)
	_, err = conn.Write([]byte(response))
	if err != nil {
		return
	}

	sessionToken := ""
	session, err := p.getSession(sessionToken)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Printf("%+v\n", session)

	wailsruntime.EventsEmit(p.ctx, "portal-core.onSessionTokenUpdate", sessionToken)
}

func (p *PortalCore) getSession(sessionToken string) (NextAuthSession, error) {
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
