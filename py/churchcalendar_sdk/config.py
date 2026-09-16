# ChurchCalendar SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


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
            "slug": "church-calendar",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "short": "List of liturgical celebrations for this date",
            "type": "`$ARRAY`",
          },
          {
            "format": "date",
            "name": "date",
            "short": "The requested date",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "short": "Description of the calendar system",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "short": "Human-readable name of the calendar",
            "type": "`$STRING`",
          },
          {
            "name": "season",
            "short": "Liturgical season",
            "type": "`$STRING`",
          },
          {
            "name": "season_week",
            "short": "Week number within the liturgical season",
            "type": "`$INTEGER`",
          },
          {
            "name": "system",
            "short": "Calendar system identifier",
            "type": "`$STRING`",
          },
          {
            "name": "weekday",
            "short": "Day of the week",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "from": {
            "calendar": "name",
          },
          "name": "id",
          "parts": [
            "calendar",
            "year",
            "month",
            "day",
          ],
          "sep": "/",
        },
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
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "var": "locale",
                  },
                  {
                    "lit": "calendars",
                  },
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
                "parts": [
                  "api",
                  "v0",
                  "{locale}",
                  "calendars",
                ],
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
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "en",
                  },
                  {
                    "lit": "calendars",
                  },
                  {
                    "var": "calendar",
                  },
                  {
                    "var": "year",
                  },
                  {
                    "var": "month",
                  },
                  {
                    "var": "day",
                  },
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
