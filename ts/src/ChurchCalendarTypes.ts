// Typed models for the ChurchCalendar SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Calendar {
  celebrations?: any[]
  date?: string
  description?: string
  id?: string
  name?: string
  season?: string
  season_week?: number
  system?: string
  weekday?: string
}

export interface CalendarLoadMatch {
  calendar: string
  day: number
  month: number
  year: number
}

export interface CalendarListMatch {
  locale: string
}

