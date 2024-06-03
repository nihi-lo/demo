package exampleapp

import (
	"context"
	"fmt"
)

type ExampleApp struct {
	ctx context.Context
}

func NewExampleApp() *ExampleApp {
	return &ExampleApp{}
}

func (a *ExampleApp) SetContext(ctx context.Context) {
	a.ctx = ctx
}

func (a *ExampleApp) Greet(name string) (string, error) {
	if name == "" {
		return "Oops, there's no name in it! :(", nil
	}
	return fmt.Sprintf("Hello %s, It's show time!", name), nil
}
