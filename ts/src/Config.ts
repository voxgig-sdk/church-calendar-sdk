
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ChurchCalendar',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "http://calapi.inadiutorium.cz",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      calendar: {
      },

    }
  }


  entity = {
    "calendar": {
      "fields": [
        {
          "name": "celebrations",
          "type": "`$ARRAY`"
        },
        {
          "name": "date",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "season",
          "type": "`$STRING`"
        },
        {
          "name": "season_week",
          "type": "`$INTEGER`"
        },
        {
          "name": "system",
          "type": "`$STRING`"
        },
        {
          "name": "weekday",
          "type": "`$STRING`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v0/{locale}/calendars",
              "parts": [
                "api",
                "v0",
                "{locale}",
                "calendars"
              ],
              "select": {
                "exist": [
                  "locale"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
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
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": 25,
                    "kind": "param",
                    "name": "day",
                    "orig": "day",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 12,
                    "kind": "param",
                    "name": "month",
                    "orig": "month",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 2024,
                    "kind": "param",
                    "name": "year",
                    "orig": "year",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
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
                "{day}"
              ],
              "select": {
                "exist": [
                  "calendar",
                  "day",
                  "month",
                  "year"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "calendar"
          ],
          [
            "v0"
          ]
        ]
      }
    }
  }
}


const config = new Config()

export {
  config
}

