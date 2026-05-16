# WorldBankData Lua SDK Reference

Complete API reference for the WorldBankData Lua SDK.


## WorldBankDataSDK

### Constructor

```lua
local sdk = require("world-bank-data_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts, sdkopts)`

Create a test client with mock features active. Both arguments may be `nil`.

```lua
local client = sdk.test(nil, nil)
```


### Instance Methods

#### `Country(data)`

Create a new `Country` entity instance. Pass `nil` for no initial data.

#### `Indicator(data)`

Create a new `Indicator` entity instance. Pass `nil` for no initial data.

#### `Metadata(data)`

Create a new `Metadata` entity instance. Pass `nil` for no initial data.

#### `Topic(data)`

Create a new `Topic` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## CountryEntity

```lua
local country = client:Country(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adminregion` | ``$OBJECT`` | No |  |
| `capital_city` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `income_level` | ``$OBJECT`` | No |  |
| `iso2_code` | ``$STRING`` | No |  |
| `latitude` | ``$STRING`` | No |  |
| `lending_type` | ``$OBJECT`` | No |  |
| `longitude` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `page` | ``$INTEGER`` | No |  |
| `per_page` | ``$INTEGER`` | No |  |
| `region` | ``$OBJECT`` | No |  |
| `total` | ``$INTEGER`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Country(nil):list(nil, nil)
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Country(nil):load({ id = "country_id" }, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CountryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IndicatorEntity

```lua
local indicator = client:Indicator(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country` | ``$OBJECT`` | No |  |
| `countryiso3code` | ``$STRING`` | No |  |
| `date` | ``$STRING`` | No |  |
| `decimal` | ``$INTEGER`` | No |  |
| `id` | ``$STRING`` | No |  |
| `indicator` | ``$OBJECT`` | No |  |
| `name` | ``$STRING`` | No |  |
| `obs_status` | ``$STRING`` | No |  |
| `source` | ``$OBJECT`` | No |  |
| `source_note` | ``$STRING`` | No |  |
| `source_organization` | ``$STRING`` | No |  |
| `topic` | ``$ARRAY`` | No |  |
| `unit` | ``$STRING`` | No |  |
| `value` | ``$NUMBER`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Indicator(nil):list(nil, nil)
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Indicator(nil):load({ id = "indicator_id" }, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IndicatorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MetadataEntity

```lua
local metadata = client:Metadata(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | ``$STRING`` | No |  |
| `description` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `iso2code` | ``$STRING`` | No |  |
| `lastupdated` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |
| `value` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Metadata(nil):list(nil, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MetadataEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TopicEntity

```lua
local topic = client:Topic(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | ``$STRING`` | No |  |
| `source_note` | ``$STRING`` | No |  |
| `value` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Topic(nil):list(nil, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TopicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

