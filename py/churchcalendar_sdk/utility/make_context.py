# ChurchCalendar SDK utility: make_context

from churchcalendar_sdk.core.context import ChurchCalendarContext


def make_context_util(ctxmap, basectx):
    return ChurchCalendarContext(ctxmap, basectx)
