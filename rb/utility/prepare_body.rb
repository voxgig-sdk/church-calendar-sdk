# ChurchCalendar SDK utility: prepare_body
module ChurchCalendarUtilities
  PrepareBody = ->(ctx) {
    ctx.op.input == "data" ? ctx.utility.transform_request.call(ctx) : nil
  }
end
