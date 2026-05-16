# WorldBankData Python SDK Reference

Complete API reference for the WorldBankData Python SDK.


## WorldBankDataSDK

### Constructor

```python
from world-bank-data_sdk import WorldBankDataSDK

client = WorldBankDataSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `WorldBankDataSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = WorldBankDataSDK.test()
```


### Instance Methods

#### `Country(data=None)`

Create a new `CountryEntity` instance. Pass `None` for no initial data.

#### `Indicator(data=None)`

Create a new `IndicatorEntity` instance. Pass `None` for no initial data.

#### `Metadata(data=None)`

Create a new `MetadataEntity` instance. Pass `None` for no initial data.

#### `Topic(data=None)`

Create a new `TopicEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> tuple`

Make a direct HTTP request to any API endpoint. Returns `(result, err)`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `(result_dict, err)`

#### `prepare(fetchargs=None) -> tuple`

Prepare a fetch definition without sending. Returns `(fetchdef, err)`.


---

## CountryEntity

```python
country = client.Country()
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

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Country().list({})
```

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Country().load({"id": "country_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CountryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IndicatorEntity

```python
indicator = client.Indicator()
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

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Indicator().list({})
```

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Indicator().load({"id": "indicator_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IndicatorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MetadataEntity

```python
metadata = client.Metadata()
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

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Metadata().list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MetadataEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TopicEntity

```python
topic = client.Topic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | ``$STRING`` | No |  |
| `source_note` | ``$STRING`` | No |  |
| `value` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Topic().list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TopicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = WorldBankDataSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

