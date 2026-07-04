// Typed models for the ChurchCalendar SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Calendar {
  colour?: string
  description?: string
  name?: string
  rank?: string
  rank_num?: number
  system?: string
  title?: string
}

export interface CalendarListMatch {
  calendar: string
  day: number
  month: number
  year: number
  locale: string
}

