package main

import (
	"changeme/backend/exampleapp"
	"changeme/backend/portalcore"
	"context"
)

// App struct
type App struct {
	exampleapp *exampleapp.ExampleApp
	portalcore *portalcore.PortalCore
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{
		exampleapp: exampleapp.NewExampleApp(),
		portalcore: portalcore.NewPortalCore(),
	}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.exampleapp.SetContext(ctx)
	a.portalcore.SetContext(ctx)
}

func (a *App) apps() []interface{} {
	return []interface{}{
		a.exampleapp,
		a.portalcore,
	}
}
