import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "country",
    "accessor": "Country",
    "op": "list",
    "method": "GET",
    "path": "/country",
    "args": [],
    "select": {
      "format": "v1",
      "page": "v1",
      "per_page": "v1"
    },
    "headers": [],
    "query": [
      "format",
      "page",
      "per_page"
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
      "format": "v1"
    },
    "headers": [],
    "query": [
      "format"
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
      "format": "v1",
      "page": "v1",
      "per_page": "v1",
      "source": "v1"
    },
    "headers": [],
    "query": [
      "format",
      "page",
      "per_page",
      "source"
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
      "format": "v1",
      "frequency": "v1",
      "gapfill": "v1",
      "mrv": "v1",
      "page": "v1",
      "per_page": "v1"
    },
    "headers": [],
    "query": [
      "format",
      "date",
      "page",
      "per_page",
      "mrv",
      "gapfill",
      "frequency"
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
      "format": "v1"
    },
    "headers": [],
    "query": [
      "format"
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
      "format": "v1",
      "page": "v1",
      "per_page": "v1"
    },
    "headers": [],
    "query": [
      "format",
      "page",
      "per_page"
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
      "format": "v1",
      "page": "v1",
      "per_page": "v1"
    },
    "headers": [],
    "query": [
      "format",
      "page",
      "per_page"
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
      "format": "v1",
      "page": "v1",
      "per_page": "v1"
    },
    "headers": [],
    "query": [
      "format",
      "page",
      "per_page"
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
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
