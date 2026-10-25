"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "country",
        "accessor": "Country",
        "op": "list",
        "method": "GET",
        "path": "/country",
        "args": [],
        "select": {
            "format": "json",
            "page": 1,
            "per_page": 50
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "format",
            "page",
            "per_page"
        ],
        "queryArgs": [
            {
                "name": "format",
                "wire": "format"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "per_page",
                "wire": "per_page"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": [
            {
                "page": 1,
                "pages": 1,
                "per_page": 1,
                "total": 1
            }
        ],
        "idField": "id"
    },
    {
        "entity": "country",
        "accessor": "Country",
        "op": "load",
        "method": "GET",
        "path": "/country/{countryCode}",
        "args": [
            {
                "name": "id",
                "wire": "countryCode",
                "value": "p1"
            }
        ],
        "select": {
            "format": "json"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "format"
        ],
        "queryArgs": [
            {
                "name": "format",
                "wire": "format"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "id": "x",
            "iso2Code": "x",
            "name": "x",
            "region": {},
            "adminregion": {},
            "incomeLevel": {},
            "lendingType": {},
            "capitalCity": "x",
            "longitude": "x",
            "latitude": "x"
        },
        "idField": "id"
    },
    {
        "entity": "indicator",
        "accessor": "Indicator",
        "op": "list",
        "method": "GET",
        "path": "/indicator",
        "args": [],
        "select": {
            "format": "json",
            "page": 1,
            "per_page": 50,
            "source": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "format",
            "page",
            "per_page",
            "source"
        ],
        "queryArgs": [
            {
                "name": "format",
                "wire": "format"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "per_page",
                "wire": "per_page"
            },
            {
                "name": "source",
                "wire": "source"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": [
            {}
        ],
        "idField": "id"
    },
    {
        "entity": "indicator",
        "accessor": "Indicator",
        "op": "load",
        "method": "GET",
        "path": "/countries/{countryCode}/indicators/{indicatorCode}",
        "args": [
            {
                "name": "country_code",
                "wire": "countryCode",
                "value": "p1"
            },
            {
                "name": "id",
                "wire": "indicatorCode",
                "value": "p2"
            }
        ],
        "select": {
            "date": "v1",
            "format": "json",
            "frequency": "v1",
            "gapfill": "N",
            "mrv": "v1",
            "page": 1,
            "per_page": 50
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "format",
            "date",
            "page",
            "per_page",
            "mrv",
            "gapfill",
            "frequency"
        ],
        "queryArgs": [
            {
                "name": "date",
                "wire": "date"
            },
            {
                "name": "format",
                "wire": "format"
            },
            {
                "name": "frequency",
                "wire": "frequency"
            },
            {
                "name": "gapfill",
                "wire": "gapfill"
            },
            {
                "name": "mrv",
                "wire": "mrv"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "per_page",
                "wire": "per_page"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": [
            {
                "indicator": {
                    "id": "x",
                    "value": "x"
                },
                "country": {
                    "id": "x",
                    "value": "x"
                },
                "countryiso3code": "x",
                "date": "x",
                "value": 1,
                "unit": "x",
                "obs_status": "x",
                "decimal": 1
            }
        ],
        "idField": "id"
    },
    {
        "entity": "indicator",
        "accessor": "Indicator",
        "op": "load",
        "method": "GET",
        "path": "/indicator/{indicatorCode}",
        "args": [
            {
                "name": "id",
                "wire": "indicatorCode",
                "value": "p1"
            }
        ],
        "select": {
            "format": "json"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "format"
        ],
        "queryArgs": [
            {
                "name": "format",
                "wire": "format"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "id": "x",
            "name": "x",
            "source": {},
            "sourceNote": "x",
            "sourceOrganization": "x",
            "topics": [
                {}
            ]
        },
        "idField": "id"
    },
    {
        "entity": "metadata",
        "accessor": "Metadata",
        "op": "list",
        "method": "GET",
        "path": "/source/{sourceId}/indicator",
        "args": [
            {
                "name": "source_id",
                "wire": "sourceId",
                "value": "p1"
            }
        ],
        "select": {
            "format": "json",
            "page": 1,
            "per_page": 50
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "format",
            "page",
            "per_page"
        ],
        "queryArgs": [
            {
                "name": "format",
                "wire": "format"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "per_page",
                "wire": "per_page"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": [
            {}
        ],
        "idField": "id"
    },
    {
        "entity": "topic",
        "accessor": "Topic",
        "op": "list",
        "method": "GET",
        "path": "/topic/{topicId}/indicator",
        "action": "indicator",
        "args": [
            {
                "name": "id",
                "wire": "topicId",
                "value": "p1"
            }
        ],
        "select": {
            "format": "json",
            "page": 1,
            "per_page": 50
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "format",
            "page",
            "per_page"
        ],
        "queryArgs": [
            {
                "name": "format",
                "wire": "format"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "per_page",
                "wire": "per_page"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": [
            {}
        ],
        "idField": "id"
    },
    {
        "entity": "topic",
        "accessor": "Topic",
        "op": "list",
        "method": "GET",
        "path": "/topic",
        "args": [],
        "select": {
            "format": "json",
            "page": 1,
            "per_page": 50
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "format",
            "page",
            "per_page"
        ],
        "queryArgs": [
            {
                "name": "format",
                "wire": "format"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "per_page",
                "wire": "per_page"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": [
            {
                "id": "x",
                "value": "x",
                "sourceNote": "x"
            }
        ],
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map