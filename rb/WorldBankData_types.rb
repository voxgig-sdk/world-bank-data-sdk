# frozen_string_literal: true

# Typed models for the WorldBankData SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Country entity data model.
#
# @!attribute [rw] adminregion
#   @return [Hash, nil]
#
# @!attribute [rw] capital_city
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] income_level
#   @return [Hash, nil]
#
# @!attribute [rw] iso2_code
#   @return [String, nil]
#
# @!attribute [rw] latitude
#   @return [String, nil]
#
# @!attribute [rw] lending_type
#   @return [Hash, nil]
#
# @!attribute [rw] longitude
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] region
#   @return [Hash, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
Country = Struct.new(
  :adminregion,
  :capital_city,
  :id,
  :income_level,
  :iso2_code,
  :latitude,
  :lending_type,
  :longitude,
  :name,
  :page,
  :per_page,
  :region,
  :total,
  keyword_init: true
)

# Request payload for Country#load.
#
# @!attribute [rw] id
#   @return [String]
CountryLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Country#list.
#
# @!attribute [rw] adminregion
#   @return [Hash, nil]
#
# @!attribute [rw] capital_city
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] income_level
#   @return [Hash, nil]
#
# @!attribute [rw] iso2_code
#   @return [String, nil]
#
# @!attribute [rw] latitude
#   @return [String, nil]
#
# @!attribute [rw] lending_type
#   @return [Hash, nil]
#
# @!attribute [rw] longitude
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] region
#   @return [Hash, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
CountryListMatch = Struct.new(
  :adminregion,
  :capital_city,
  :id,
  :income_level,
  :iso2_code,
  :latitude,
  :lending_type,
  :longitude,
  :name,
  :page,
  :per_page,
  :region,
  :total,
  keyword_init: true
)

# Indicator entity data model.
#
# @!attribute [rw] country
#   @return [Hash, nil]
#
# @!attribute [rw] countryiso3code
#   @return [String, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] decimal
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] indicator
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] obs_status
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [Hash, nil]
#
# @!attribute [rw] source_note
#   @return [String, nil]
#
# @!attribute [rw] source_organization
#   @return [String, nil]
#
# @!attribute [rw] topic
#   @return [Array, nil]
#
# @!attribute [rw] unit
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [Float, nil]
Indicator = Struct.new(
  :country,
  :countryiso3code,
  :date,
  :decimal,
  :id,
  :indicator,
  :name,
  :obs_status,
  :source,
  :source_note,
  :source_organization,
  :topic,
  :unit,
  :value,
  keyword_init: true
)

# Request payload for Indicator#load.
#
# @!attribute [rw] country_code
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
IndicatorLoadMatch = Struct.new(
  :country_code,
  :id,
  keyword_init: true
)

# Request payload for Indicator#list.
#
# @!attribute [rw] country
#   @return [Hash, nil]
#
# @!attribute [rw] countryiso3code
#   @return [String, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] decimal
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] indicator
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] obs_status
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [Hash, nil]
#
# @!attribute [rw] source_note
#   @return [String, nil]
#
# @!attribute [rw] source_organization
#   @return [String, nil]
#
# @!attribute [rw] topic
#   @return [Array, nil]
#
# @!attribute [rw] unit
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [Float, nil]
IndicatorListMatch = Struct.new(
  :country,
  :countryiso3code,
  :date,
  :decimal,
  :id,
  :indicator,
  :name,
  :obs_status,
  :source,
  :source_note,
  :source_organization,
  :topic,
  :unit,
  :value,
  keyword_init: true
)

# Metadata entity data model.
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] iso2code
#   @return [String, nil]
#
# @!attribute [rw] lastupdated
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
Metadata = Struct.new(
  :code,
  :description,
  :id,
  :iso2code,
  :lastupdated,
  :name,
  :url,
  :value,
  keyword_init: true
)

# Request payload for Metadata#list.
#
# @!attribute [rw] source_id
#   @return [Integer]
MetadataListMatch = Struct.new(
  :source_id,
  keyword_init: true
)

# Topic entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] source_note
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
Topic = Struct.new(
  :id,
  :source_note,
  :value,
  keyword_init: true
)

# Request payload for Topic#list.
#
# @!attribute [rw] id
#   @return [Integer]
TopicListMatch = Struct.new(
  :id,
  keyword_init: true
)

