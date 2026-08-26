-- ChurchCalendar SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "ChurchCalendar",
      slug = "church-calendar",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "http://calapi.inadiutorium.cz",
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
            ["name"] = "celebrations",
            ["short"] = "List of liturgical celebrations for this date",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "date",
            ["short"] = "The requested date",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["short"] = "Description of the calendar system",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["short"] = "Human-readable name of the calendar",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "season",
            ["short"] = "Liturgical season",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "season_week",
            ["short"] = "Week number within the liturgical season",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "system",
            ["short"] = "Calendar system identifier",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "weekday",
            ["short"] = "Day of the week",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "calendar",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
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
                    },
                  },
                },
                ["kind"] = "http",
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
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
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
                    },
                    {
                      ["example"] = 25,
                      ["kind"] = "param",
                      ["name"] = "day",
                      ["orig"] = "day",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 12,
                      ["kind"] = "param",
                      ["name"] = "month",
                      ["orig"] = "month",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 2024,
                      ["kind"] = "param",
                      ["name"] = "year",
                      ["orig"] = "year",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
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
              },
            },
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
