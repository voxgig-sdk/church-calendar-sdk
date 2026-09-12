# frozen_string_literal: true

# Typed models for the ChurchCalendar SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Calendar entity data model.
#
# @!attribute [rw] celebrations
#   @return [Array, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] season
#   @return [String, nil]
#
# @!attribute [rw] season_week
#   @return [Integer, nil]
#
# @!attribute [rw] system
#   @return [String, nil]
#
# @!attribute [rw] weekday
#   @return [String, nil]
Calendar = Struct.new(
  :celebrations,
  :date,
  :description,
  :id,
  :name,
  :season,
  :season_week,
  :system,
  :weekday,
  keyword_init: true
)

# Request payload for Calendar#load.
#
# @!attribute [rw] calendar
#   @return [String]
#
# @!attribute [rw] day
#   @return [Integer]
#
# @!attribute [rw] month
#   @return [Integer]
#
# @!attribute [rw] year
#   @return [Integer]
CalendarLoadMatch = Struct.new(
  :calendar,
  :day,
  :month,
  :year,
  keyword_init: true
)

# Request payload for Calendar#list.
#
# @!attribute [rw] locale
#   @return [String]
CalendarListMatch = Struct.new(
  :locale,
  keyword_init: true
)

