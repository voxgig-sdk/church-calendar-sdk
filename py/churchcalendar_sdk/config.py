# ChurchCalendar SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
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
            "name": "celebrations",
            "type": "`$ARRAY`",
          },
          {
            "name": "date",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "season",
            "type": "`$STRING`",
          },
          {
            "name": "season_week",
            "type": "`$INTEGER`",
          },
          {
            "name": "system",
            "type": "`$STRING`",
          },
          {
            "name": "weekday",
            "type": "`$STRING`",
          },
        ],
        "name": "calendar",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
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
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
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
                    },
                    {
                      "example": 25,
                      "kind": "param",
                      "name": "day",
                      "orig": "day",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 12,
                      "kind": "param",
                      "name": "month",
                      "orig": "month",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 2024,
                      "kind": "param",
                      "name": "year",
                      "orig": "year",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
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
