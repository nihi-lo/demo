package usecase

type SimulateContestInput struct {
	Email    string
	Password string
}

type SimulateContestOutput struct {
	ID    string `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

type SimulateContestUsecase interface {
	Handle(input *SimulateContestInput) *SimulateContestOutput
}
