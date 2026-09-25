# WorldBankData SDK configuration

module WorldBankDataConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "WorldBankData",
        "slug" => "world-bank-data",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://api.worldbank.org/v2",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "country" => {},
          "indicator" => {},
          "metadata" => {},
          "topic" => {},
        },
      },
      "entity" => {
        "country" => {
          "fields" => [
            {
              "name" => "adminregion",
              "title" => "Adminregion",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "capitalCity",
              "title" => "Capital City",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "incomeLevel",
              "title" => "Income Level",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "iso2Code",
              "title" => "Iso2 Code",
              "type" => "`$STRING`",
            },
            {
              "name" => "latitude",
              "title" => "Latitude",
              "type" => "`$STRING`",
            },
            {
              "name" => "lendingType",
              "title" => "Lending Type",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "longitude",
              "title" => "Longitude",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
            },
            {
              "name" => "page",
              "title" => "Page",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "pages",
              "title" => "Pages",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "per_page",
              "title" => "Per Page",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "region",
              "title" => "Region",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "total",
              "title" => "Total",
              "type" => "`$INTEGER`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "country",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/country",
                  "segments" => [
                    {
                      "lit" => "country",
                    },
                  ],
                  "parts" => [
                    "country",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "json",
                      },
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                      {
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 50,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "format",
                      "page",
                      "per_page",
                    ],
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/country/{countryCode}",
                  "segments" => [
                    {
                      "lit" => "country",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "country",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "countryCode" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "country_code",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                    "query" => [
                      {
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "json",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "format",
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "indicator" => {
          "fields" => [
            {
              "name" => "country",
              "title" => "Country",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "countryiso3code",
              "title" => "Countryiso3code",
              "type" => "`$STRING`",
            },
            {
              "name" => "date",
              "title" => "Date",
              "type" => "`$STRING`",
            },
            {
              "name" => "decimal",
              "title" => "Decimal",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "indicator",
              "title" => "Indicator",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
            },
            {
              "name" => "obs_status",
              "title" => "Obs Status",
              "type" => "`$STRING`",
            },
            {
              "name" => "source",
              "title" => "Source",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "sourceNote",
              "title" => "Source Note",
              "type" => "`$STRING`",
            },
            {
              "name" => "sourceOrganization",
              "title" => "Source Organization",
              "type" => "`$STRING`",
            },
            {
              "name" => "topics",
              "title" => "Topics",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "unit",
              "title" => "Unit",
              "type" => "`$STRING`",
            },
            {
              "name" => "value",
              "title" => "Value",
              "type" => "`$NUMBER`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "indicator",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/indicator",
                  "segments" => [
                    {
                      "lit" => "indicator",
                    },
                  ],
                  "parts" => [
                    "indicator",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "json",
                      },
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                      {
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 50,
                      },
                      {
                        "name" => "source",
                        "orig" => "source",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "format",
                      "page",
                      "per_page",
                      "source",
                    ],
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/countries/{countryCode}/indicators/{indicatorCode}",
                  "segments" => [
                    {
                      "lit" => "countries",
                    },
                    {
                      "var" => "country_code",
                    },
                    {
                      "lit" => "indicators",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "countries",
                    "{country_code}",
                    "indicators",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "countryCode" => "country_code",
                      "indicatorCode" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "country_code",
                        "orig" => "country_code",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                      {
                        "name" => "id",
                        "orig" => "indicator_code",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                    "query" => [
                      {
                        "name" => "date",
                        "orig" => "date",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "json",
                      },
                      {
                        "name" => "frequency",
                        "orig" => "frequency",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "gapfill",
                        "orig" => "gapfill",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "N",
                      },
                      {
                        "name" => "mrv",
                        "orig" => "mrv",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                      {
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 50,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "country_code",
                      "date",
                      "format",
                      "frequency",
                      "gapfill",
                      "id",
                      "mrv",
                      "page",
                      "per_page",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/indicator/{indicatorCode}",
                  "segments" => [
                    {
                      "lit" => "indicator",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "indicator",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "indicatorCode" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "indicator_code",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                    "query" => [
                      {
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "json",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "format",
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.country",
              ],
            ],
          },
        },
        "metadata" => {
          "fields" => [
            {
              "name" => "code",
              "title" => "Code",
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "title" => "Description",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "iso2code",
              "title" => "Iso2code",
              "type" => "`$STRING`",
            },
            {
              "name" => "lastupdated",
              "title" => "Lastupdated",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
            },
            {
              "name" => "url",
              "title" => "Url",
              "type" => "`$STRING`",
            },
            {
              "name" => "value",
              "title" => "Value",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "metadata",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/source/{sourceId}/indicator",
                  "segments" => [
                    {
                      "lit" => "source",
                    },
                    {
                      "var" => "source_id",
                    },
                    {
                      "lit" => "indicator",
                    },
                  ],
                  "parts" => [
                    "source",
                    "{source_id}",
                    "indicator",
                  ],
                  "rename" => {
                    "param" => {
                      "sourceId" => "source_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "source_id",
                        "orig" => "source_id",
                        "type" => "`$INTEGER`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                    "query" => [
                      {
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "json",
                      },
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                      {
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 50,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "format",
                      "page",
                      "per_page",
                      "source_id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/incomelevel",
                  "segments" => [
                    {
                      "lit" => "incomelevel",
                    },
                  ],
                  "parts" => [
                    "incomelevel",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "json",
                      },
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                      {
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 50,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "format",
                      "page",
                      "per_page",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/lendingtype",
                  "segments" => [
                    {
                      "lit" => "lendingtype",
                    },
                  ],
                  "parts" => [
                    "lendingtype",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "json",
                      },
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                      {
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 50,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "format",
                      "page",
                      "per_page",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/region",
                  "segments" => [
                    {
                      "lit" => "region",
                    },
                  ],
                  "parts" => [
                    "region",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "json",
                      },
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                      {
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 50,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "format",
                      "page",
                      "per_page",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/source",
                  "segments" => [
                    {
                      "lit" => "source",
                    },
                  ],
                  "parts" => [
                    "source",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "json",
                      },
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                      {
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 50,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "format",
                      "page",
                      "per_page",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "topic" => {
          "fields" => [
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "sourceNote",
              "title" => "Source Note",
              "type" => "`$STRING`",
            },
            {
              "name" => "value",
              "title" => "Value",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "topic",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/topic/{topicId}/indicator",
                  "segments" => [
                    {
                      "lit" => "topic",
                    },
                    {
                      "var" => "id",
                    },
                    {
                      "lit" => "indicator",
                    },
                  ],
                  "parts" => [
                    "topic",
                    "{id}",
                    "indicator",
                  ],
                  "rename" => {
                    "param" => {
                      "topicId" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "topic_id",
                        "type" => "`$INTEGER`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                    "query" => [
                      {
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "json",
                      },
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                      {
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 50,
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "indicator",
                    "exist" => [
                      "format",
                      "id",
                      "page",
                      "per_page",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/topic",
                  "segments" => [
                    {
                      "lit" => "topic",
                    },
                  ],
                  "parts" => [
                    "topic",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "json",
                      },
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                      {
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 50,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "format",
                      "page",
                      "per_page",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    WorldBankDataFeatures.make_feature(name)
  end
end
