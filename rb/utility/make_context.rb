# ChurchCalendar SDK utility: make_context
require_relative '../core/context'
module ChurchCalendarUtilities
  MakeContext = ->(ctxmap, basectx) {
    ChurchCalendarContext.new(ctxmap, basectx)
  }
end
