package main

import (
	"changeme/backend/homeapp"
	"changeme/backend/portalcore"
	"context"
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
			portalcore.NewPortalCore(),

			/* sub apps */
			homeapp.NewApp(),
		},
	}
}

func (a *App) startup(ctx context.Context) {
	for _, subApp := range a.subApps {
		subApp.SetContext(ctx)
	}
}

func (a *App) GetSubApps() []any {
	subApps := []any{}
	for _, subApp := range a.subApps {
		subApps = append(subApps, subApp)
	}

	return subApps
}
