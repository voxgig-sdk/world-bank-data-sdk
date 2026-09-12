export interface Country {
    adminregion?: Record<string, any>;
    capitalCity?: string;
    id?: string;
    incomeLevel?: Record<string, any>;
    iso2Code?: string;
    latitude?: string;
    lendingType?: Record<string, any>;
    longitude?: string;
    name?: string;
    page?: number;
    pages?: number;
    per_page?: number;
    region?: Record<string, any>;
    total?: number;
}
export interface CountryLoadMatch {
    id: string;
    format?: string;
}
export interface CountryListMatch {
    format?: string;
    page?: number;
    per_page?: number;
}
export interface Indicator {
    country?: Record<string, any>;
    countryiso3code?: string;
    date?: string;
    decimal?: number;
    id?: string;
    indicator?: Record<string, any>;
    name?: string;
    obs_status?: string;
    source?: Record<string, any>;
    sourceNote?: string;
    sourceOrganization?: string;
    topics?: any[];
    unit?: string;
    value?: number;
}
export interface IndicatorLoadMatch {
    country_code?: string;
    id: string;
    date?: string;
    format?: string;
    frequency?: string;
    gapfill?: string;
    mrv?: number;
    page?: number;
    per_page?: number;
}
export interface IndicatorListMatch {
    format?: string;
    page?: number;
    per_page?: number;
    source?: number;
}
export interface Metadata {
    code?: string;
    description?: string;
    id?: string;
    iso2code?: string;
    lastupdated?: string;
    name?: string;
    url?: string;
    value?: string;
}
export interface MetadataListMatch {
    format?: string;
    page?: number;
    per_page?: number;
}
export interface Topic {
    id?: string;
    sourceNote?: string;
    value?: string;
}
export interface TopicListMatch {
    format?: string;
    page?: number;
    per_page?: number;
    $action?: string;
    [action: string]: any;
}
