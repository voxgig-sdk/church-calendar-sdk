-- ProjectName SDK configuration

local function make_config()
  return {
    main = {
      name = "ChurchCalendar",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "http://calapi.inadiutorium.cz",
      auth = {
        prefix = "Bearer",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["calendar"] = {},
      },
    },
    entity = {
      ["calendar"] = {
        ["fields"] = {
          {
            ["name"] = "colour",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 0,
          },
          {
            ["name"] = "description",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 1,
          },
          {
            ["name"] = "name",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 2,
          },
          {
            ["name"] = "rank",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 3,
          },
          {
            ["name"] = "rank_num",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["active"] = true,
            ["index$"] = 4,
          },
          {
            ["name"] = "system",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 5,
          },
          {
            ["name"] = "title",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 6,
          },
        },
        ["name"] = "calendar",
        ["op"] = {
          ["list"] = {
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "default",
                      ["kind"] = "param",
                      ["name"] = "calendar",
                      ["orig"] = "calendar",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = 25,
                      ["kind"] = "param",
                      ["name"] = "day",
                      ["orig"] = "day",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = 12,
                      ["kind"] = "param",
                      ["name"] = "month",
                      ["orig"] = "month",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = 2024,
                      ["kind"] = "param",
                      ["name"] = "year",
                      ["orig"] = "year",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                      ["active"] = true,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/api/v0/en/calendars/{calendar}/{year}/{month}/{day}",
                ["parts"] = {
                  "api",
                  "v0",
                  "en",
                  "calendars",
                  "{calendar}",
                  "{year}",
                  "{month}",
                  "{day}",
                },
                ["select"] = {
                  ["exist"] = {
                    "calendar",
                    "day",
                    "month",
                    "year",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["index$"] = 0,
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "en",
                      ["kind"] = "param",
                      ["name"] = "locale",
                      ["orig"] = "locale",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["active"] = true,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/api/v0/{locale}/calendars",
                ["parts"] = {
                  "api",
                  "v0",
                  "{locale}",
                  "calendars",
                },
                ["select"] = {
                  ["exist"] = {
                    "locale",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["index$"] = 1,
              },
            },
            ["input"] = "data",
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "calendar",
            },
            {
              "v0",
            },
          },
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
