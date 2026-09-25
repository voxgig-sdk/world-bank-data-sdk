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
			"name": "WorldBankData",
			"slug": "world-bank-data",
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
			"base": "https://api.worldbank.org/v2",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"country": map[string]any{},
				"indicator": map[string]any{},
				"metadata": map[string]any{},
				"topic": map[string]any{},
			},
		},
		"entity": map[string]any{
			"country": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "adminregion",
						"title": "Adminregion",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "capitalCity",
						"title": "Capital City",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "incomeLevel",
						"title": "Income Level",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "iso2Code",
						"title": "Iso2 Code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "latitude",
						"title": "Latitude",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lendingType",
						"title": "Lending Type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "longitude",
						"title": "Longitude",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "page",
						"title": "Page",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "pages",
						"title": "Pages",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "per_page",
						"title": "Per Page",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "region",
						"title": "Region",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "total",
						"title": "Total",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "country",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/country",
								"segments": []any{
									map[string]any{
										"lit": "country",
									},
								},
								"parts": []any{
									"country",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
											"kind": "query",
											"example": "json",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"format",
										"page",
										"per_page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/country/{countryCode}",
								"segments": []any{
									map[string]any{
										"lit": "country",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"country",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"countryCode": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "country_code",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
											"kind": "query",
											"example": "json",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"format",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"indicator": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "country",
						"title": "Country",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "countryiso3code",
						"title": "Countryiso3code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "decimal",
						"title": "Decimal",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "indicator",
						"title": "Indicator",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "obs_status",
						"title": "Obs Status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source",
						"title": "Source",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "sourceNote",
						"title": "Source Note",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sourceOrganization",
						"title": "Source Organization",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "topics",
						"title": "Topics",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "unit",
						"title": "Unit",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$NUMBER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "indicator",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/indicator",
								"segments": []any{
									map[string]any{
										"lit": "indicator",
									},
								},
								"parts": []any{
									"indicator",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
											"kind": "query",
											"example": "json",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "source",
											"orig": "source",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"format",
										"page",
										"per_page",
										"source",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/countries/{countryCode}/indicators/{indicatorCode}",
								"segments": []any{
									map[string]any{
										"lit": "countries",
									},
									map[string]any{
										"var": "country_code",
									},
									map[string]any{
										"lit": "indicators",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"countries",
									"{country_code}",
									"indicators",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"countryCode": "country_code",
										"indicatorCode": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "country_code",
											"orig": "country_code",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "indicator_code",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "date",
											"orig": "date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
											"kind": "query",
											"example": "json",
										},
										map[string]any{
											"name": "frequency",
											"orig": "frequency",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "gapfill",
											"orig": "gapfill",
											"type": "`$STRING`",
											"kind": "query",
											"example": "N",
										},
										map[string]any{
											"name": "mrv",
											"orig": "mrv",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"country_code",
										"date",
										"format",
										"frequency",
										"gapfill",
										"id",
										"mrv",
										"page",
										"per_page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/indicator/{indicatorCode}",
								"segments": []any{
									map[string]any{
										"lit": "indicator",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"indicator",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"indicatorCode": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "indicator_code",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
											"kind": "query",
											"example": "json",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"format",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.country",
						},
					},
				},
			},
			"metadata": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "code",
						"title": "Code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "iso2code",
						"title": "Iso2code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lastupdated",
						"title": "Lastupdated",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "metadata",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/source/{sourceId}/indicator",
								"segments": []any{
									map[string]any{
										"lit": "source",
									},
									map[string]any{
										"var": "source_id",
									},
									map[string]any{
										"lit": "indicator",
									},
								},
								"parts": []any{
									"source",
									"{source_id}",
									"indicator",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"sourceId": "source_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "source_id",
											"orig": "source_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
											"kind": "query",
											"example": "json",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"format",
										"page",
										"per_page",
										"source_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/incomelevel",
								"segments": []any{
									map[string]any{
										"lit": "incomelevel",
									},
								},
								"parts": []any{
									"incomelevel",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
											"kind": "query",
											"example": "json",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"format",
										"page",
										"per_page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/lendingtype",
								"segments": []any{
									map[string]any{
										"lit": "lendingtype",
									},
								},
								"parts": []any{
									"lendingtype",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
											"kind": "query",
											"example": "json",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"format",
										"page",
										"per_page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/region",
								"segments": []any{
									map[string]any{
										"lit": "region",
									},
								},
								"parts": []any{
									"region",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
											"kind": "query",
											"example": "json",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"format",
										"page",
										"per_page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/source",
								"segments": []any{
									map[string]any{
										"lit": "source",
									},
								},
								"parts": []any{
									"source",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
											"kind": "query",
											"example": "json",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"format",
										"page",
										"per_page",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"topic": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sourceNote",
						"title": "Source Note",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "topic",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/topic/{topicId}/indicator",
								"segments": []any{
									map[string]any{
										"lit": "topic",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "indicator",
									},
								},
								"parts": []any{
									"topic",
									"{id}",
									"indicator",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"topicId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "topic_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
											"kind": "query",
											"example": "json",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"$action": "indicator",
									"exist": []any{
										"format",
										"id",
										"page",
										"per_page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/topic",
								"segments": []any{
									map[string]any{
										"lit": "topic",
									},
								},
								"parts": []any{
									"topic",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
											"kind": "query",
											"example": "json",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"format",
										"page",
										"per_page",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
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
