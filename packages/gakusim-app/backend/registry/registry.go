package registry

import (
	"github.com/nihi-lo/demo/packages/gakusim-app/backend/adapter/controller"
	"github.com/nihi-lo/demo/packages/gakusim-app/backend/usecase/interactor"
)

type Registry struct {
	ContestController *controller.ContestController
}

func NewRegistry() (*Registry, error) {
	r := &Registry{}
	if err := r.init(); err != nil {
		return nil, err
	}

	return r, nil
}

func (r *Registry) init() error {
	r.ContestController = controller.NewContestController(
		interactor.NewSimulateContestInteractor(),
	)

	return nil
}
