package homeapp

import (
	"context"
	"fmt"
)

type App struct {
	ctx context.Context
}

func NewApp() *App {
	return &App{}
}

func (a *App) SetContext(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) Greet(name string) (string, error) {
	if name == "" {
		return "Oops, there's no name in it! :(", nil
	}
	return fmt.Sprintf("Hello %s, It's show time!", name), nil
}
