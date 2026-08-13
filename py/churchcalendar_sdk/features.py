# ChurchCalendar SDK feature factory

from churchcalendar_sdk.feature.base_feature import ChurchCalendarBaseFeature
from churchcalendar_sdk.feature.test_feature import ChurchCalendarTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ChurchCalendarBaseFeature(),
        "test": lambda: ChurchCalendarTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
