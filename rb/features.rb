# ChurchCalendar SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ChurchCalendarFeatures
  def self.make_feature(name)
    case name
    when "base"
      ChurchCalendarBaseFeature.new
    when "ratelimit"
      ChurchCalendarRatelimitFeature.new
    when "retry"
      ChurchCalendarRetryFeature.new
    when "test"
      ChurchCalendarTestFeature.new
    when "timeout"
      ChurchCalendarTimeoutFeature.new
    else
      ChurchCalendarBaseFeature.new
    end
  end
end
