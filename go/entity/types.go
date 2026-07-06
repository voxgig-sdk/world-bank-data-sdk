// Typed models for the WorldBankData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Country is the typed data model for the country entity.
type Country struct {
	Adminregion *map[string]any `json:"adminregion,omitempty"`
	CapitalCity *string `json:"capital_city,omitempty"`
	Id *string `json:"id,omitempty"`
	IncomeLevel *map[string]any `json:"income_level,omitempty"`
	Iso2Code *string `json:"iso2_code,omitempty"`
	Latitude *string `json:"latitude,omitempty"`
	LendingType *map[string]any `json:"lending_type,omitempty"`
	Longitude *string `json:"longitude,omitempty"`
	Name *string `json:"name,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Region *map[string]any `json:"region,omitempty"`
	Total *int `json:"total,omitempty"`
}

// CountryLoadMatch is the typed request payload for Country.LoadTyped.
type CountryLoadMatch struct {
	Id string `json:"id"`
}

// CountryListMatch is the typed request payload for Country.ListTyped.
type CountryListMatch struct {
	Adminregion *map[string]any `json:"adminregion,omitempty"`
	CapitalCity *string `json:"capital_city,omitempty"`
	Id *string `json:"id,omitempty"`
	IncomeLevel *map[string]any `json:"income_level,omitempty"`
	Iso2Code *string `json:"iso2_code,omitempty"`
	Latitude *string `json:"latitude,omitempty"`
	LendingType *map[string]any `json:"lending_type,omitempty"`
	Longitude *string `json:"longitude,omitempty"`
	Name *string `json:"name,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Region *map[string]any `json:"region,omitempty"`
	Total *int `json:"total,omitempty"`
}

// Indicator is the typed data model for the indicator entity.
type Indicator struct {
	Country *map[string]any `json:"country,omitempty"`
	Countryiso3code *string `json:"countryiso3code,omitempty"`
	Date *string `json:"date,omitempty"`
	Decimal *int `json:"decimal,omitempty"`
	Id *string `json:"id,omitempty"`
	Indicator *map[string]any `json:"indicator,omitempty"`
	Name *string `json:"name,omitempty"`
	ObsStatus *string `json:"obs_status,omitempty"`
	Source *map[string]any `json:"source,omitempty"`
	SourceNote *string `json:"source_note,omitempty"`
	SourceOrganization *string `json:"source_organization,omitempty"`
	Topic *[]any `json:"topic,omitempty"`
	Unit *string `json:"unit,omitempty"`
	Value *float64 `json:"value,omitempty"`
}

// IndicatorLoadMatch is the typed request payload for Indicator.LoadTyped.
type IndicatorLoadMatch struct {
	CountryCode string `json:"country_code"`
	Id string `json:"id"`
}

// IndicatorListMatch is the typed request payload for Indicator.ListTyped.
type IndicatorListMatch struct {
	Country *map[string]any `json:"country,omitempty"`
	Countryiso3code *string `json:"countryiso3code,omitempty"`
	Date *string `json:"date,omitempty"`
	Decimal *int `json:"decimal,omitempty"`
	Id *string `json:"id,omitempty"`
	Indicator *map[string]any `json:"indicator,omitempty"`
	Name *string `json:"name,omitempty"`
	ObsStatus *string `json:"obs_status,omitempty"`
	Source *map[string]any `json:"source,omitempty"`
	SourceNote *string `json:"source_note,omitempty"`
	SourceOrganization *string `json:"source_organization,omitempty"`
	Topic *[]any `json:"topic,omitempty"`
	Unit *string `json:"unit,omitempty"`
	Value *float64 `json:"value,omitempty"`
}

// Metadata is the typed data model for the metadata entity.
type Metadata struct {
	Code *string `json:"code,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Iso2code *string `json:"iso2code,omitempty"`
	Lastupdated *string `json:"lastupdated,omitempty"`
	Name *string `json:"name,omitempty"`
	Url *string `json:"url,omitempty"`
	Value *string `json:"value,omitempty"`
}

// MetadataListMatch is the typed request payload for Metadata.ListTyped.
type MetadataListMatch struct {
	SourceId int `json:"source_id"`
}

// Topic is the typed data model for the topic entity.
type Topic struct {
	Id *string `json:"id,omitempty"`
	SourceNote *string `json:"source_note,omitempty"`
	Value *string `json:"value,omitempty"`
}

// TopicListMatch is the typed request payload for Topic.ListTyped.
type TopicListMatch struct {
	Id int `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
