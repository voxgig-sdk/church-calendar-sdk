package core

type ChurchCalendarError struct {
	IsChurchCalendarError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewChurchCalendarError(code string, msg string, ctx *Context) *ChurchCalendarError {
	return &ChurchCalendarError{
		IsChurchCalendarError: true,
		Sdk:              "ChurchCalendar",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ChurchCalendarError) Error() string {
	return e.Msg
}
