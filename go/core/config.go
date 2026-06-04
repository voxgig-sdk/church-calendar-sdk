package core

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
						"name": "colour",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "description",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "rank",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "rank_num",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "system",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "title",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 6,
					},
				},
				"name": "calendar",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
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
											"active": true,
										},
										map[string]any{
											"example": 25,
											"kind": "param",
											"name": "day",
											"orig": "day",
											"reqd": true,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"example": 12,
											"kind": "param",
											"name": "month",
											"orig": "month",
											"reqd": true,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"example": 2024,
											"kind": "param",
											"name": "year",
											"orig": "year",
											"reqd": true,
											"type": "`$INTEGER`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
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
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 1,
							},
						},
						"input": "data",
						"key$": "list",
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
