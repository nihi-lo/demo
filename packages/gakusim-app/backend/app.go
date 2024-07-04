package gakusimapp

import (
	"context"

	"github.com/nihi-lo/demo/packages/gakusim-app/backend/registry"
)

type App struct {
	ctx      context.Context
	registry *registry.Registry
}

func NewApp() *App {
	r, _ := registry.NewRegistry()

	return &App{
		registry: r,
	}
}

func (a *App) SetContext(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) SimulateContest() (string, error) {
	return a.registry.ContestController.SimulateContest()
}
