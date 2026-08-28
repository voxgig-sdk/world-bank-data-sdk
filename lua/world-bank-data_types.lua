-- Typed models for the WorldBankData SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Country
---@field adminregion? table
---@field capitalCity? string
---@field id? string
---@field incomeLevel? table
---@field iso2Code? string
---@field latitude? string
---@field lendingType? table
---@field longitude? string
---@field name? string
---@field page? number
---@field pages? number
---@field per_page? number
---@field region? table
---@field total? number

---@class CountryLoadMatch
---@field id string
---@field format? string

---@class CountryListMatch
---@field format? string
---@field page? number
---@field per_page? number

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
---@field sourceNote? string
---@field sourceOrganization? string
---@field topics? table
---@field unit? string
---@field value? number

---@class IndicatorLoadMatch
---@field country_code? string
---@field id string
---@field date? string
---@field format? string
---@field frequency? string
---@field gapfill? string
---@field mrv? number
---@field page? number
---@field per_page? number

---@class IndicatorListMatch
---@field format? string
---@field page? number
---@field per_page? number
---@field source? number

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
---@field format? string
---@field page? number
---@field per_page? number

---@class Topic
---@field id? string
---@field sourceNote? string
---@field value? string

---@class TopicListMatch
---@field format? string
---@field page? number
---@field per_page? number

local M = {}

return M
