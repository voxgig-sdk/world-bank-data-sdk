-- Typed models for the WorldBankData SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Country
---@field adminregion? table
---@field capital_city? string
---@field id? string
---@field income_level? table
---@field iso2_code? string
---@field latitude? string
---@field lending_type? table
---@field longitude? string
---@field name? string
---@field page? number
---@field per_page? number
---@field region? table
---@field total? number

---@class CountryLoadMatch
---@field id string

---@class CountryListMatch
---@field adminregion? table
---@field capital_city? string
---@field id? string
---@field income_level? table
---@field iso2_code? string
---@field latitude? string
---@field lending_type? table
---@field longitude? string
---@field name? string
---@field page? number
---@field per_page? number
---@field region? table
---@field total? number

---@class Indicator
---@field country? table
---@field countryiso3code? string
---@field date? string
---@field decimal? number
---@field id? string
---@field indicator? table
---@field name? string
---@field obs_status? string
---@field source? table
---@field source_note? string
---@field source_organization? string
---@field topic? table
---@field unit? string
---@field value? number

---@class IndicatorLoadMatch
---@field country_code string
---@field id string

---@class IndicatorListMatch
---@field country? table
---@field countryiso3code? string
---@field date? string
---@field decimal? number
---@field id? string
---@field indicator? table
---@field name? string
---@field obs_status? string
---@field source? table
---@field source_note? string
---@field source_organization? string
---@field topic? table
---@field unit? string
---@field value? number

---@class Metadata
---@field code? string
---@field description? string
---@field id? string
---@field iso2code? string
---@field lastupdated? string
---@field name? string
---@field url? string
---@field value? string

---@class MetadataListMatch
---@field source_id number

---@class Topic
---@field id? string
---@field source_note? string
---@field value? string

---@class TopicListMatch
---@field id number

local M = {}

return M
