# ChurchCalendar SDK exists test

require "minitest/autorun"
require_relative "../ChurchCalendar_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ChurchCalendarSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
