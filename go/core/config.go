package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "ChurchCalendar",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "http://calapi.inadiutorium.cz",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"calendar": map[string]any{},
			},
		},
		"entity": map[string]any{
			"calendar": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "celebrations",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "season",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "season_week",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "system",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "weekday",
						"type": "`$STRING`",
					},
				},
				"name": "calendar",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "en",
											"kind": "param",
											"name": "locale",
											"orig": "locale",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v0/{locale}/calendars",
								"parts": []any{
									"api",
									"v0",
									"{locale}",
									"calendars",
								},
								"select": map[string]any{
									"exist": []any{
										"locale",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "default",
											"kind": "param",
											"name": "calendar",
											"orig": "calendar",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 25,
											"kind": "param",
											"name": "day",
											"orig": "day",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 12,
											"kind": "param",
											"name": "month",
											"orig": "month",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 2024,
											"kind": "param",
											"name": "year",
											"orig": "year",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v0/en/calendars/{calendar}/{year}/{month}/{day}",
								"parts": []any{
									"api",
									"v0",
									"en",
									"calendars",
									"{calendar}",
									"{year}",
									"{month}",
									"{day}",
								},
								"select": map[string]any{
									"exist": []any{
										"calendar",
										"day",
										"month",
										"year",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"calendar",
						},
						[]any{
							"v0",
						},
					},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
