# WorldBankData SDK

Query economic, financial, and social indicators for 200+ countries from the World Bank's open data catalogue

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About World Bank Data API

The World Bank Data API is the public HTTP interface to the [World Bank's Open Data catalogue](https://data.worldbank.org), maintained by [The World Bank](https://www.worldbank.org). It exposes development indicators and reference data covering more than 200 countries and economies, sourced from World Development Indicators and dozens of partner datasets.

What you get from the API:

- Country, region, income-level, and lending-type reference lists
- Thousands of development indicators (GDP, population, health, education, environment, finance, etc.) with historical time series
- Topic and source catalogues that group indicators by theme and provider
- Metadata describing indicators, sources, and footnotes

The service is served from `https://api.worldbank.org/v2` and supports JSON and XML output via a `format` query parameter. It is open and does not require an API key; CORS is enabled, and queries can be filtered by date range, country code, and indicator code as described in the [developer knowledge base](https://datahelpdesk.worldbank.org/knowledgebase/topics/125589-developer-information).

## Try it

**TypeScript**
```bash
npm install world-bank-data
```

**Python**
```bash
pip install world-bank-data-sdk
```

**PHP**
```bash
composer require voxgig/world-bank-data-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/world-bank-data-sdk/go
```

**Ruby**
```bash
gem install world-bank-data-sdk
```

**Lua**
```bash
luarocks install world-bank-data-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { WorldBankDataSDK } from 'world-bank-data'

const client = new WorldBankDataSDK({})

// List all countrys
const countrys = await client.Country().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o world-bank-data-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "world-bank-data": {
      "command": "/abs/path/to/world-bank-data-mcp"
    }
  }
}
```

## Entities

The API exposes 4 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Country** | Reference resources for countries, regions, income levels, and lending types — see the [Country API Queries](https://datahelpdesk.worldbank.org/knowledgebase/articles/898590-country-api-queries) docs, typically under `/country` paths. | `/country` |
| **Indicator** | Catalogue of World Bank development indicators and their time-series values — see the [Indicator API Queries](https://datahelpdesk.worldbank.org/knowledgebase/articles/898599-indicator-api-queries) docs, typically under `/indicator` paths. | `/indicator` |
| **Metadata** | Descriptive metadata, footnotes, and source documentation attached to indicators and observations — see the [Metadata API Queries](https://datahelpdesk.worldbank.org/knowledgebase/articles/1886686-advanced-data-api-queries) docs. | `/source/{sourceId}/indicator` |
| **Topic** | Thematic groupings (e.g. Health, Education, Environment) used to organise indicators — see the [Topic API Queries](https://datahelpdesk.worldbank.org/knowledgebase/articles/898614-topic-api-queries) docs, typically under `/topic` paths. | `/topic/{topicId}/indicator` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from worldbankdata_sdk import WorldBankDataSDK

client = WorldBankDataSDK({})

# List all countrys
countrys, err = client.Country(None).list(None, None)

# Load a specific country
country, err = client.Country(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'worldbankdata_sdk.php';

$client = new WorldBankDataSDK([]);

// List all countrys
[$countrys, $err] = $client->Country(null)->list(null, null);

// Load a specific country
[$country, $err] = $client->Country(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/world-bank-data-sdk/go"

client := sdk.NewWorldBankDataSDK(map[string]any{})

// List all countrys
countrys, err := client.Country(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "WorldBankData_sdk"

client = WorldBankDataSDK.new({})

# List all countrys
countrys, err = client.Country(nil).list(nil, nil)

# Load a specific country
country, err = client.Country(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("world-bank-data_sdk")

local client = sdk.new({})

-- List all countrys
local countrys, err = client:Country(nil):list(nil, nil)

-- Load a specific country
local country, err = client:Country(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = WorldBankDataSDK.test()
const result = await client.Country().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = WorldBankDataSDK.test(None, None)
result, err = client.Country(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = WorldBankDataSDK::test(null, null);
[$result, $err] = $client->Country(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Country(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = WorldBankDataSDK.test(nil, nil)
result, err = client.Country(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Country(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the World Bank Data API

- Upstream: [https://data.worldbank.org](https://data.worldbank.org)
- API docs: [https://datahelpdesk.worldbank.org/knowledgebase/topics/125589-developer-information](https://datahelpdesk.worldbank.org/knowledgebase/topics/125589-developer-information)

- Most World Bank datasets are published as open data, typically under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
- Attribution to The World Bank is required; some datasets carry their own terms inherited from third-party sources.
- Review the [World Bank Terms of Use](https://www.worldbank.org/en/about/legal/terms-of-use-for-datasets) before redistributing or commercialising data.

---

Generated from the World Bank Data API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
