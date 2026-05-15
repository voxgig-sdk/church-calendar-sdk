# ChurchCalendar SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ChurchCalendarFeatures
  def self.make_feature(name)
    case name
    when "base"
      ChurchCalendarBaseFeature.new
    when "test"
      ChurchCalendarTestFeature.new
    else
      ChurchCalendarBaseFeature.new
    end
  end
end
