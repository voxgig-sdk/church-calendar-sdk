# ChurchCalendar SDK utility: feature_add
module ChurchCalendarUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
