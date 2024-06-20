package main

import (
	"context"

	aboutapp "changeme/packages/about-app/backend"
	homeapp "changeme/packages/home-app/backend"
	notfoundapp "changeme/packages/notfound-app/backend"
	otherappsapp "changeme/packages/otherapps-app/backend"
	portalclient "changeme/packages/portal-client/backend"
	portalcore "changeme/packages/portal-core/backend"
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
			/* 基本パッケージ */
			portalcore.NewCore(),
			portalclient.NewClient(),

			/* サブアプリパッケージ */
			aboutapp.NewApp(),
			homeapp.NewApp(),
			notfoundapp.NewApp(),
			otherappsapp.NewApp(),
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
