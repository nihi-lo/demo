package main

import (
	"context"

	aboutapp "changeme/packages/about-app/src/backend"
	homeapp "changeme/packages/home-app/src/backend"
	notfoundapp "changeme/packages/notfound-app/src/backend"
	otherappsapp "changeme/packages/otherapps-app/src/backend"
	portalclient "changeme/packages/portal-client/src/backend"
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
			aboutapp.NewApp(),
			homeapp.NewApp(),
			notfoundapp.NewApp(),
			otherappsapp.NewApp(),
			portalclient.NewClient(),
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
