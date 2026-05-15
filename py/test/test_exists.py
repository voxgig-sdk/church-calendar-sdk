# ProjectName SDK exists test

import pytest
from churchcalendar_sdk import ChurchCalendarSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ChurchCalendarSDK.test(None, None)
        assert testsdk is not None
