-- ChurchCalendar SDK error

local ChurchCalendarError = {}
ChurchCalendarError.__index = ChurchCalendarError


function ChurchCalendarError.new(code, msg, ctx)
  local self = setmetatable({}, ChurchCalendarError)
  self.is_sdk_error = true
  self.sdk = "ChurchCalendar"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ChurchCalendarError:error()
  return self.msg
end


function ChurchCalendarError:__tostring()
  return self.msg
end


return ChurchCalendarError
