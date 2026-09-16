"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
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
        name: 'WorldBankData',
        slug: "world-bank-data",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
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
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://api.worldbank.org/v2",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            country: {},
            indicator: {},
            metadata: {},
            topic: {},
        }
    };
    entity = {
        "country": {
            "fields": [
                {
                    "name": "adminregion",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "capitalCity",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "incomeLevel",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "iso2Code",
                    "type": "`$STRING`"
                },
                {
                    "name": "latitude",
                    "type": "`$STRING`"
                },
                {
                    "name": "lendingType",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "longitude",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "name": "page",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "pages",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "per_page",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "region",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "total",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "country",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "json",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/country",
                            "segments": [
                                {
                                    "lit": "country"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "format",
                                    "page",
                                    "per_page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "country"
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
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "country_code",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "json",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/country/{countryCode}",
                            "rename": {
                                "param": {
                                    "countryCode": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "country"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "format",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "country",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "indicator": {
            "fields": [
                {
                    "name": "country",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "countryiso3code",
                    "type": "`$STRING`"
                },
                {
                    "name": "date",
                    "type": "`$STRING`"
                },
                {
                    "name": "decimal",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "indicator",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "name": "obs_status",
                    "type": "`$STRING`"
                },
                {
                    "name": "source",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "sourceNote",
                    "type": "`$STRING`"
                },
                {
                    "name": "sourceOrganization",
                    "type": "`$STRING`"
                },
                {
                    "name": "topics",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "unit",
                    "type": "`$STRING`"
                },
                {
                    "name": "value",
                    "type": "`$NUMBER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "indicator",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "json",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "source",
                                        "orig": "source",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/indicator",
                            "segments": [
                                {
                                    "lit": "indicator"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "format",
                                    "page",
                                    "per_page",
                                    "source"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "indicator"
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
                                        "kind": "param",
                                        "name": "country_code",
                                        "orig": "country_code",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "indicator_code",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "date",
                                        "orig": "date",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "json",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "frequency",
                                        "orig": "frequency",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "N",
                                        "kind": "query",
                                        "name": "gapfill",
                                        "orig": "gapfill",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "mrv",
                                        "orig": "mrv",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/countries/{countryCode}/indicators/{indicatorCode}",
                            "rename": {
                                "param": {
                                    "countryCode": "country_code",
                                    "indicatorCode": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "countries"
                                },
                                {
                                    "var": "country_code"
                                },
                                {
                                    "lit": "indicators"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "country_code",
                                    "date",
                                    "format",
                                    "frequency",
                                    "gapfill",
                                    "id",
                                    "mrv",
                                    "page",
                                    "per_page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "countries",
                                "{country_code}",
                                "indicators",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "indicator_code",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "json",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/indicator/{indicatorCode}",
                            "rename": {
                                "param": {
                                    "indicatorCode": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "indicator"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "format",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "indicator",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "country"
                    ]
                ]
            }
        },
        "metadata": {
            "fields": [
                {
                    "name": "code",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso2code",
                    "type": "`$STRING`"
                },
                {
                    "name": "lastupdated",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "name": "url",
                    "type": "`$STRING`"
                },
                {
                    "name": "value",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "metadata",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "source_id",
                                        "orig": "source_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "json",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/source/{sourceId}/indicator",
                            "rename": {
                                "param": {
                                    "sourceId": "source_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "source"
                                },
                                {
                                    "var": "source_id"
                                },
                                {
                                    "lit": "indicator"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "format",
                                    "page",
                                    "per_page",
                                    "source_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "source",
                                "{source_id}",
                                "indicator"
                            ]
                        },
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "json",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/incomelevel",
                            "segments": [
                                {
                                    "lit": "incomelevel"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "format",
                                    "page",
                                    "per_page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "incomelevel"
                            ]
                        },
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "json",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/lendingtype",
                            "segments": [
                                {
                                    "lit": "lendingtype"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "format",
                                    "page",
                                    "per_page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "lendingtype"
                            ]
                        },
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "json",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/region",
                            "segments": [
                                {
                                    "lit": "region"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "format",
                                    "page",
                                    "per_page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "region"
                            ]
                        },
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "json",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/source",
                            "segments": [
                                {
                                    "lit": "source"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "format",
                                    "page",
                                    "per_page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "source"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "source"
                    ]
                ]
            }
        },
        "topic": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "sourceNote",
                    "type": "`$STRING`"
                },
                {
                    "name": "value",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "topic",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "topic_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "json",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/topic/{topicId}/indicator",
                            "rename": {
                                "param": {
                                    "topicId": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "topic"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "indicator"
                                }
                            ],
                            "select": {
                                "$action": "indicator",
                                "exist": [
                                    "format",
                                    "id",
                                    "page",
                                    "per_page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "topic",
                                "{id}",
                                "indicator"
                            ]
                        },
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "json",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/topic",
                            "segments": [
                                {
                                    "lit": "topic"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "format",
                                    "page",
                                    "per_page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "topic"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map