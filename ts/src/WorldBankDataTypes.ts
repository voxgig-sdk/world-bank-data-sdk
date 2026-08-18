// Typed models for the WorldBankData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Country {
  adminregion?: Record<string, any>
  capitalCity?: string
  id?: string
  incomeLevel?: Record<string, any>
  iso2Code?: string
  latitude?: string
  lendingType?: Record<string, any>
  longitude?: string
  name?: string
  page?: number
  pages?: number
  per_page?: number
  region?: Record<string, any>
  total?: number
}

export interface CountryLoadMatch {
  id: string
}

export interface CountryListMatch {
  adminregion?: Record<string, any>
  capitalCity?: string
  id?: string
  incomeLevel?: Record<string, any>
  iso2Code?: string
  latitude?: string
  lendingType?: Record<string, any>
  longitude?: string
  name?: string
  page?: number
  pages?: number
  per_page?: number
  region?: Record<string, any>
  total?: number
}

export interface Indicator {
  country?: Record<string, any>
  countryiso3code?: string
  date?: string
  decimal?: number
  id?: string
  indicator?: Record<string, any>
  name?: string
  obs_status?: string
  source?: Record<string, any>
  sourceNote?: string
  sourceOrganization?: string
  topics?: any[]
  unit?: string
  value?: number
}

export interface IndicatorLoadMatch {
  country_code?: string
  id: string
}

export interface IndicatorListMatch {
  country?: Record<string, any>
  countryiso3code?: string
  date?: string
  decimal?: number
  id?: string
  indicator?: Record<string, any>
  name?: string
  obs_status?: string
  source?: Record<string, any>
  sourceNote?: string
  sourceOrganization?: string
  topics?: any[]
  unit?: string
  value?: number
}

export interface Metadata {
  code?: string
  description?: string
  id?: string
  iso2code?: string
  lastupdated?: string
  name?: string
  url?: string
  value?: string
}

export interface MetadataListMatch {
  code?: string
  description?: string
  id?: string
  iso2code?: string
  lastupdated?: string
  name?: string
  url?: string
  value?: string
}

export interface Topic {
  id?: string
  sourceNote?: string
  value?: string
}

export interface TopicListMatch {
  id?: string
  sourceNote?: string
  value?: string

  // Selects a custom action instead of the plain list:
  //   'indicator'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

