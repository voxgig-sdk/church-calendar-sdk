# ChurchCalendar SDK configuration


def make_config():
    return {
        "main": {
            "name": "ChurchCalendar",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "http://calapi.inadiutorium.cz",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "calendar": {},
            },
        },
        "entity": {
      "calendar": {
        "fields": [
          {
            "name": "colour",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "rank",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "rank_num",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "system",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
        ],
        "name": "calendar",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": "default",
                      "kind": "param",
                      "name": "calendar",
                      "orig": "calendar",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 25,
                      "kind": "param",
                      "name": "day",
                      "orig": "day",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "example": 12,
                      "kind": "param",
                      "name": "month",
                      "orig": "month",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "example": 2024,
                      "kind": "param",
                      "name": "year",
                      "orig": "year",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/api/v0/en/calendars/{calendar}/{year}/{month}/{day}",
                "parts": [
                  "api",
                  "v0",
                  "en",
                  "calendars",
                  "{calendar}",
                  "{year}",
                  "{month}",
                  "{day}",
                ],
                "select": {
                  "exist": [
                    "calendar",
                    "day",
                    "month",
                    "year",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
              {
                "args": {
                  "params": [
                    {
                      "example": "en",
                      "kind": "param",
                      "name": "locale",
                      "orig": "locale",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/api/v0/{locale}/calendars",
                "parts": [
                  "api",
                  "v0",
                  "{locale}",
                  "calendars",
                ],
                "select": {
                  "exist": [
                    "locale",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 1,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "calendar",
            ],
            [
              "v0",
            ],
          ],
        },
      },
    },
    }
