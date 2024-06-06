package main

import (
	"changeme/backend/homeapp"
	"changeme/backend/portalcore"
	"context"
)

// App struct
type App struct {
	portalCore *portalcore.PortalCore

	/* sub apps */
	homeApp *homeapp.HomeApp
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{
		portalCore: portalcore.NewPortalCore(),

		/* sub apps */
		homeApp: homeapp.NewHomeApp(),
	}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.portalCore.SetContext(ctx)

	/* sub apps */
	a.homeApp.SetContext(ctx)
}

func (a *App) apps() []interface{} {
	return []interface{}{
		a.portalCore,

		/* sub apps */
		a.homeApp,
	}
}
