
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
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: 'http://calapi.inadiutorium.cz',

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
          "active": true,
          "name": "colour",
          "req": false,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "description",
          "req": false,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "rank",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "rank_num",
          "req": false,
          "type": "`$NUMBER`",
          "index$": 4
        },
        {
          "active": true,
          "name": "system",
          "req": false,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "title",
          "req": false,
          "type": "`$STRING`",
          "index$": 6
        }
      ],
      "name": "calendar",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "params": [
                  {
                    "active": true,
                    "example": "default",
                    "kind": "param",
                    "name": "calendar",
                    "orig": "calendar",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  },
                  {
                    "active": true,
                    "example": 25,
                    "kind": "param",
                    "name": "day",
                    "orig": "day",
                    "reqd": true,
                    "type": "`$INTEGER`",
                    "index$": 1
                  },
                  {
                    "active": true,
                    "example": 12,
                    "kind": "param",
                    "name": "month",
                    "orig": "month",
                    "reqd": true,
                    "type": "`$INTEGER`",
                    "index$": 2
                  },
                  {
                    "active": true,
                    "example": 2024,
                    "kind": "param",
                    "name": "year",
                    "orig": "year",
                    "reqd": true,
                    "type": "`$INTEGER`",
                    "index$": 3
                  }
                ]
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
              },
              "index$": 0
            },
            {
              "active": true,
              "args": {
                "params": [
                  {
                    "active": true,
                    "example": "en",
                    "kind": "param",
                    "name": "locale",
                    "orig": "locale",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
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
              },
              "index$": 1
            }
          ],
          "key$": "list"
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

