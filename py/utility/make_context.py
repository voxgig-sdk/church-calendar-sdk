# ChurchCalendar SDK utility: make_context

from core.context import ChurchCalendarContext


def make_context_util(ctxmap, basectx):
    return ChurchCalendarContext(ctxmap, basectx)
