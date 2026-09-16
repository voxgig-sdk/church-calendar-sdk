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
			"slug": "church-calendar",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"short": "List of liturgical celebrations for this date",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date",
						"name": "date",
						"short": "The requested date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Description of the calendar system",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Human-readable name of the calendar",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "season",
						"short": "Liturgical season",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "season_week",
						"short": "Week number within the liturgical season",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "system",
						"short": "Calendar system identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "weekday",
						"short": "Day of the week",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"from": map[string]any{
						"calendar": "name",
					},
					"name": "id",
					"parts": []any{
						"calendar",
						"year",
						"month",
						"day",
					},
					"sep": "/",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"var": "locale",
									},
									map[string]any{
										"lit": "calendars",
									},
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
								"parts": []any{
									"api",
									"v0",
									"{locale}",
									"calendars",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "en",
									},
									map[string]any{
										"lit": "calendars",
									},
									map[string]any{
										"var": "calendar",
									},
									map[string]any{
										"var": "year",
									},
									map[string]any{
										"var": "month",
									},
									map[string]any{
										"var": "day",
									},
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
