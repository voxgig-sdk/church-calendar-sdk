-- Typed models for the ChurchCalendar SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Calendar
---@field celebrations? table
---@field date? string
---@field description? string
---@field id? string
---@field name? string
---@field season? string
---@field season_week? number
---@field system? string
---@field weekday? string

---@class CalendarLoadMatch
---@field calendar string
---@field day number
---@field month number
---@field year number

---@class CalendarListMatch
---@field locale string

local M = {}

return M
