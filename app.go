package main

import (
	"changeme/backend/exampleapp"
	"changeme/backend/portalcore"
	"context"
)

// App struct
type App struct {
	portalCore *portalcore.PortalCore

	/* sub apps */
	exampleApp *exampleapp.ExampleApp
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{
		portalCore: portalcore.NewPortalCore(),

		/* sub apps */
		exampleApp: exampleapp.NewExampleApp(),
	}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.portalCore.SetContext(ctx)

	/* sub apps */
	a.exampleApp.SetContext(ctx)
}

func (a *App) apps() []interface{} {
	return []interface{}{
		a.portalCore,

		/* sub apps */
		a.exampleApp,
	}
}
