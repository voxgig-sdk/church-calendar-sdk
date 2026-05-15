package = "voxgig-sdk-church-calendar"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/church-calendar-sdk.git"
}
description = {
  summary = "ChurchCalendar SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["church-calendar_sdk"] = "church-calendar_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
