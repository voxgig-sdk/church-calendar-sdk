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
# @!attribute [rw] colour
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] rank
#   @return [String, nil]
#
# @!attribute [rw] rank_num
#   @return [Float, nil]
#
# @!attribute [rw] system
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
Calendar = Struct.new(
  :colour,
  :description,
  :name,
  :rank,
  :rank_num,
  :system,
  :title,
  keyword_init: true
)

# Request payload for Calendar#list.
#
# @!attribute [rw] calendar
#   @return [String, nil]
#
# @!attribute [rw] day
#   @return [Integer, nil]
#
# @!attribute [rw] month
#   @return [Integer, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
CalendarListMatch = Struct.new(
  :calendar,
  :day,
  :month,
  :year,
  :locale,
  keyword_init: true
)

