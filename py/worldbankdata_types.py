# Typed models for the WorldBankData SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Country(TypedDict, total=False):
    adminregion: dict
    capital_city: str
    id: str
    income_level: dict
    iso2_code: str
    latitude: str
    lending_type: dict
    longitude: str
    name: str
    page: int
    per_page: int
    region: dict
    total: int


class CountryLoadMatch(TypedDict):
    id: str


class CountryListMatch(TypedDict, total=False):
    adminregion: dict
    capital_city: str
    id: str
    income_level: dict
    iso2_code: str
    latitude: str
    lending_type: dict
    longitude: str
    name: str
    page: int
    per_page: int
    region: dict
    total: int


class Indicator(TypedDict, total=False):
    country: dict
    countryiso3code: str
    date: str
    decimal: int
    id: str
    indicator: dict
    name: str
    obs_status: str
    source: dict
    source_note: str
    source_organization: str
    topic: list
    unit: str
    value: float


class IndicatorLoadMatchRequired(TypedDict):
    id: str


class IndicatorLoadMatch(IndicatorLoadMatchRequired, total=False):
    country_code: str


class IndicatorListMatch(TypedDict, total=False):
    country: dict
    countryiso3code: str
    date: str
    decimal: int
    id: str
    indicator: dict
    name: str
    obs_status: str
    source: dict
    source_note: str
    source_organization: str
    topic: list
    unit: str
    value: float


class Metadata(TypedDict, total=False):
    code: str
    description: str
    id: str
    iso2code: str
    lastupdated: str
    name: str
    url: str
    value: str


class MetadataListMatch(TypedDict, total=False):
    source_id: int


class Topic(TypedDict, total=False):
    id: str
    source_note: str
    value: str


class TopicListMatch(TypedDict, total=False):
    id: str
    source_note: str
    value: str
