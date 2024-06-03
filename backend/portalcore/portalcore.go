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
	// リスナーを作成
	listener, err := net.Listen("tcp", "localhost:8080")
	if err != nil {
		return
	}
	defer listener.Close()

	// ブラウザで認証ページを開き、コールバックを待つ
	wailsruntime.BrowserOpenURL(a.ctx, "http://localhost:3000/api/auth/signin")
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

	// HTMLレスポンスを作成
	response := "HTTP/1.1 200 OK\r\n" +
		"Content-Type: text/html\r\n" +
		"Connection: close\r\n" +
		"\r\n" +
		string(responseHtml)

	// レスポンスを送信
	_, err = conn.Write([]byte(response))
	if err != nil {
		return
	}
}
