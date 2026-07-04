# Typed models for the WorldBankData SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Country:
    adminregion: Optional[dict] = None
    capital_city: Optional[str] = None
    id: Optional[str] = None
    income_level: Optional[dict] = None
    iso2_code: Optional[str] = None
    latitude: Optional[str] = None
    lending_type: Optional[dict] = None
    longitude: Optional[str] = None
    name: Optional[str] = None
    page: Optional[int] = None
    per_page: Optional[int] = None
    region: Optional[dict] = None
    total: Optional[int] = None


@dataclass
class CountryLoadMatch:
    id: str


@dataclass
class CountryListMatch:
    adminregion: Optional[dict] = None
    capital_city: Optional[str] = None
    id: Optional[str] = None
    income_level: Optional[dict] = None
    iso2_code: Optional[str] = None
    latitude: Optional[str] = None
    lending_type: Optional[dict] = None
    longitude: Optional[str] = None
    name: Optional[str] = None
    page: Optional[int] = None
    per_page: Optional[int] = None
    region: Optional[dict] = None
    total: Optional[int] = None


@dataclass
class Indicator:
    country: Optional[dict] = None
    countryiso3code: Optional[str] = None
    date: Optional[str] = None
    decimal: Optional[int] = None
    id: Optional[str] = None
    indicator: Optional[dict] = None
    name: Optional[str] = None
    obs_status: Optional[str] = None
    source: Optional[dict] = None
    source_note: Optional[str] = None
    source_organization: Optional[str] = None
    topic: Optional[list] = None
    unit: Optional[str] = None
    value: Optional[float] = None


@dataclass
class IndicatorLoadMatch:
    country_code: str
    id: str


@dataclass
class IndicatorListMatch:
    country: Optional[dict] = None
    countryiso3code: Optional[str] = None
    date: Optional[str] = None
    decimal: Optional[int] = None
    id: Optional[str] = None
    indicator: Optional[dict] = None
    name: Optional[str] = None
    obs_status: Optional[str] = None
    source: Optional[dict] = None
    source_note: Optional[str] = None
    source_organization: Optional[str] = None
    topic: Optional[list] = None
    unit: Optional[str] = None
    value: Optional[float] = None


@dataclass
class Metadata:
    code: Optional[str] = None
    description: Optional[str] = None
    id: Optional[str] = None
    iso2code: Optional[str] = None
    lastupdated: Optional[str] = None
    name: Optional[str] = None
    url: Optional[str] = None
    value: Optional[str] = None


@dataclass
class MetadataListMatch:
    source_id: int


@dataclass
class Topic:
    id: Optional[str] = None
    source_note: Optional[str] = None
    value: Optional[str] = None


@dataclass
class TopicListMatch:
    id: int

