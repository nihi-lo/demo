package main

import (
	"context"

	portalclient "github.com/nihi-lo/demo/packages/portal-client/backend"
	portalcore "github.com/nihi-lo/demo/packages/portal-core/backend"

	// SUB_APP_IMPORT_START
	aboutapp "github.com/nihi-lo/demo/packages/about-app/backend"
	gakusimapp "github.com/nihi-lo/demo/packages/gakusim-app/backend"
	homeapp "github.com/nihi-lo/demo/packages/home-app/backend"
	// SUB_APP_IMPORT_END
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
			// SUB_APP_NEWAPP_START
			aboutapp.NewApp(),
			gakusimapp.NewApp(),
			homeapp.NewApp(),
			// SUB_APP_NEWAPP_END
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
