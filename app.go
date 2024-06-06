package main

import (
	"context"

	homeapp "changeme/packages/home-app/src/backend"
	portalcore "changeme/packages/portal-core/src/backend"
)

type SubApplication interface {
	SetContext(ctx context.Context)
}

type App struct {
	subApps []SubApplication
}

func NewApp() *App {
	return &App{
		subApps: []SubApplication{
			homeapp.NewApp(),
			portalcore.NewCore(),
		},
	}
}

func (a *App) HandleStartup(ctx context.Context) {
	for _, subApp := range a.subApps {
		subApp.SetContext(ctx)
	}
}

func (a *App) SubApps() []any {
	subApps := []any{}
	for _, subApp := range a.subApps {
		subApps = append(subApps, subApp)
	}

	return subApps
}
