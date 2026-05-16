package core

type WorldBankDataError struct {
	IsWorldBankDataError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewWorldBankDataError(code string, msg string, ctx *Context) *WorldBankDataError {
	return &WorldBankDataError{
		IsWorldBankDataError: true,
		Sdk:              "WorldBankData",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *WorldBankDataError) Error() string {
	return e.Msg
}
