package interactor

import (
	"time"

	"github.com/nihi-lo/demo/packages/gakusim-app/backend/domain/usecase"
)

type SimulateContestInteractor struct{}

func NewSimulateContestInteractor() usecase.SimulateContestUsecase {
	return &SimulateContestInteractor{}
}

func (i *SimulateContestInteractor) Handle(input *usecase.SimulateContestInput) *usecase.SimulateContestOutput {
	time.Sleep(3 * time.Second)

	return &usecase.SimulateContestOutput{
		ID:    "1",
		Name:  "taro",
		Email: "foo",
	}
}
