package homeapp

import (
	"context"
	"fmt"
)

type HomeApp struct {
	ctx context.Context
}

func NewHomeApp() *HomeApp {
	return &HomeApp{}
}

func (h *HomeApp) SetContext(ctx context.Context) {
	h.ctx = ctx
}

func (h *HomeApp) Greet(name string) (string, error) {
	if name == "" {
		return "Oops, there's no name in it! :(", nil
	}
	return fmt.Sprintf("Hello %s, It's show time!", name), nil
}
