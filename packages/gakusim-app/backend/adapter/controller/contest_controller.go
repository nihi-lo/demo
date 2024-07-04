package controller

import (
	"encoding/json"
	"fmt"

	"github.com/nihi-lo/demo/packages/gakusim-app/backend/domain/usecase"
)

type ContestController struct {
	simulateContest usecase.SimulateContestUsecase
}

func NewContestController(
	simulateContest usecase.SimulateContestUsecase,
) *ContestController {
	return &ContestController{
		simulateContest: simulateContest,
	}
}

func (c *ContestController) SimulateContest() (string, error) {
	output := c.simulateContest.Handle(&usecase.SimulateContestInput{
		Email:    "foo",
		Password: "bar",
	})

	bytes, err := json.Marshal(output)
	if err != nil {
		return "{}", fmt.Errorf("error: %w", err)
	}

	return string(bytes), nil
}
