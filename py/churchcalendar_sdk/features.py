# ChurchCalendar SDK feature factory

from churchcalendar_sdk.feature.base_feature import ChurchCalendarBaseFeature
from churchcalendar_sdk.feature.ratelimit_feature import ChurchCalendarRatelimitFeature
from churchcalendar_sdk.feature.retry_feature import ChurchCalendarRetryFeature
from churchcalendar_sdk.feature.test_feature import ChurchCalendarTestFeature
from churchcalendar_sdk.feature.timeout_feature import ChurchCalendarTimeoutFeature


_FEATURES = {
    "base": lambda: ChurchCalendarBaseFeature(),
    "ratelimit": lambda: ChurchCalendarRatelimitFeature(),
    "retry": lambda: ChurchCalendarRetryFeature(),
    "test": lambda: ChurchCalendarTestFeature(),
    "timeout": lambda: ChurchCalendarTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
