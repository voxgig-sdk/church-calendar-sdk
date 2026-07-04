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
            "active": True,
            "name": "colour",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "rank",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "rank_num",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "system",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
        ],
        "name": "calendar",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "default",
                      "kind": "param",
                      "name": "calendar",
                      "orig": "calendar",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "param",
                      "name": "day",
                      "orig": "day",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "example": 12,
                      "kind": "param",
                      "name": "month",
                      "orig": "month",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 2,
                    },
                    {
                      "active": True,
                      "example": 2024,
                      "kind": "param",
                      "name": "year",
                      "orig": "year",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 3,
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
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "en",
                      "kind": "param",
                      "name": "locale",
                      "orig": "locale",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
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
                "index$": 1,
              },
            ],
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
