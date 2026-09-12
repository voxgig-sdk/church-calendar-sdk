"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'ChurchCalendar',
        slug: "church-calendar",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "http://calapi.inadiutorium.cz",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            calendar: {},
        }
    };
    entity = {
        "calendar": {
            "fields": [
                {
                    "name": "celebrations",
                    "short": "List of liturgical celebrations for this date",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "date",
                    "name": "date",
                    "short": "The requested date",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "short": "Description of the calendar system",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "Human-readable name of the calendar",
                    "type": "`$STRING`"
                },
                {
                    "name": "season",
                    "short": "Liturgical season",
                    "type": "`$STRING`"
                },
                {
                    "name": "season_week",
                    "short": "Week number within the liturgical season",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "system",
                    "short": "Calendar system identifier",
                    "type": "`$STRING`"
                },
                {
                    "name": "weekday",
                    "short": "Day of the week",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "from": {
                    "calendar": "name"
                },
                "name": "id",
                "parts": [
                    "calendar",
                    "year",
                    "month",
                    "day"
                ],
                "sep": "/"
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
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v0/{locale}/calendars",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v0"
                                },
                                {
                                    "var": "locale"
                                },
                                {
                                    "lit": "calendars"
                                }
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
                            "parts": [
                                "api",
                                "v0",
                                "{locale}",
                                "calendars"
                            ]
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
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v0"
                                },
                                {
                                    "lit": "en"
                                },
                                {
                                    "lit": "calendars"
                                },
                                {
                                    "var": "calendar"
                                },
                                {
                                    "var": "year"
                                },
                                {
                                    "var": "month"
                                },
                                {
                                    "var": "day"
                                }
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
                            "parts": [
                                "api",
                                "v0",
                                "en",
                                "calendars",
                                "{calendar}",
                                "{year}",
                                "{month}",
                                "{day}"
                            ]
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
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map