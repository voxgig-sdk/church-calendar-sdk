
import { Context } from './Context'


class ChurchCalendarError extends Error {

  isChurchCalendarError = true

  sdk = 'ChurchCalendar'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  ChurchCalendarError
}

