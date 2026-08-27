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
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
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
              "type" => "`$OBJECT`",
            },
            {
              "name" => "capitalCity",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "incomeLevel",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "iso2Code",
              "type" => "`$STRING`",
            },
            {
              "name" => "latitude",
              "type" => "`$STRING`",
            },
            {
              "name" => "lendingType",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "longitude",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "page",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "pages",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "per_page",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "region",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "total",
              "type" => "`$INTEGER`",
            },
          ],
          "name" => "country",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 50,
                        "kind" => "query",
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/country",
                  "parts" => [
                    "country",
                  ],
                  "select" => {
                    "exist" => [
                      "format",
                      "page",
                      "per_page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "country_code",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/country/{countryCode}",
                  "parts" => [
                    "country",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "countryCode" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "format",
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
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
              "type" => "`$OBJECT`",
            },
            {
              "name" => "countryiso3code",
              "type" => "`$STRING`",
            },
            {
              "name" => "date",
              "type" => "`$STRING`",
            },
            {
              "name" => "decimal",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "indicator",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "obs_status",
              "type" => "`$STRING`",
            },
            {
              "name" => "source",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "sourceNote",
              "type" => "`$STRING`",
            },
            {
              "name" => "sourceOrganization",
              "type" => "`$STRING`",
            },
            {
              "name" => "topics",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "unit",
              "type" => "`$STRING`",
            },
            {
              "name" => "value",
              "type" => "`$NUMBER`",
            },
          ],
          "name" => "indicator",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 50,
                        "kind" => "query",
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "source",
                        "orig" => "source",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/indicator",
                  "parts" => [
                    "indicator",
                  ],
                  "select" => {
                    "exist" => [
                      "format",
                      "page",
                      "per_page",
                      "source",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "country_code",
                        "orig" => "country_code",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "indicator_code",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "date",
                        "orig" => "date",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "frequency",
                        "orig" => "frequency",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "N",
                        "kind" => "query",
                        "name" => "gapfill",
                        "orig" => "gapfill",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "mrv",
                        "orig" => "mrv",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 50,
                        "kind" => "query",
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/countries/{countryCode}/indicators/{indicatorCode}",
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
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "indicator_code",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/indicator/{indicatorCode}",
                  "parts" => [
                    "indicator",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "indicatorCode" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "format",
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "country",
              ],
            ],
          },
        },
        "metadata" => {
          "fields" => [
            {
              "name" => "code",
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "iso2code",
              "type" => "`$STRING`",
            },
            {
              "name" => "lastupdated",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "url",
              "type" => "`$STRING`",
            },
            {
              "name" => "value",
              "type" => "`$STRING`",
            },
          ],
          "name" => "metadata",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "source_id",
                        "orig" => "source_id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 50,
                        "kind" => "query",
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/source/{sourceId}/indicator",
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
                  "select" => {
                    "exist" => [
                      "format",
                      "page",
                      "per_page",
                      "source_id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 50,
                        "kind" => "query",
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/incomelevel",
                  "parts" => [
                    "incomelevel",
                  ],
                  "select" => {
                    "exist" => [
                      "format",
                      "page",
                      "per_page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 50,
                        "kind" => "query",
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/lendingtype",
                  "parts" => [
                    "lendingtype",
                  ],
                  "select" => {
                    "exist" => [
                      "format",
                      "page",
                      "per_page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 50,
                        "kind" => "query",
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/region",
                  "parts" => [
                    "region",
                  ],
                  "select" => {
                    "exist" => [
                      "format",
                      "page",
                      "per_page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 50,
                        "kind" => "query",
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/source",
                  "parts" => [
                    "source",
                  ],
                  "select" => {
                    "exist" => [
                      "format",
                      "page",
                      "per_page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "source",
              ],
            ],
          },
        },
        "topic" => {
          "fields" => [
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "sourceNote",
              "type" => "`$STRING`",
            },
            {
              "name" => "value",
              "type" => "`$STRING`",
            },
          ],
          "name" => "topic",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "topic_id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 50,
                        "kind" => "query",
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/topic/{topicId}/indicator",
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
                  "select" => {
                    "$action" => "indicator",
                    "exist" => [
                      "format",
                      "id",
                      "page",
                      "per_page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 50,
                        "kind" => "query",
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/topic",
                  "parts" => [
                    "topic",
                  ],
                  "select" => {
                    "exist" => [
                      "format",
                      "page",
                      "per_page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
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
