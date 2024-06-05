package portalcore

import (
	"context"
	_ "embed"
	"fmt"
	"net"
	"runtime"

	wailsruntime "github.com/wailsapp/wails/v2/pkg/runtime"
)

//go:embed response.html
var responseHtml []byte

type PortalCore struct {
	ctx context.Context

	authListener *net.Listener /* 認証プロセスリスナー */
}

func NewPortalCore() *PortalCore {
	return &PortalCore{}
}

func (a *PortalCore) SetContext(ctx context.Context) {
	a.ctx = ctx
}

func (a *PortalCore) GetOS() string {
	switch runtime.GOOS {
	case "windows":
		return "windows"
	case "darwin":
		return "macos"
	default:
		return "undetermined"
	}
}

func (a *PortalCore) SignIn() {
	// ブラウザで認証ページを開く
	wailsruntime.BrowserOpenURL(a.ctx, "http://localhost:3000/api/auth/signin")

	// すでに認証プロセスが実行中の場合、ここで終了
	if a.authListener != nil {
		fmt.Println("すでに認証開始中")
		return
	}

	// リスナーを作成
	listener, err := net.Listen("tcp", "localhost:8080")
	if err != nil {
		return
	}
	defer listener.Close()

	a.authListener = &listener
	defer func() {
		a.authListener = nil
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
}
