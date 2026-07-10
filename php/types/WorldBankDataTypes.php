<?php
declare(strict_types=1);

// Typed models for the WorldBankData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Country entity data model. */
class Country
{
    public ?array $adminregion = null;
    public ?string $capital_city = null;
    public ?string $id = null;
    public ?array $income_level = null;
    public ?string $iso2_code = null;
    public ?string $latitude = null;
    public ?array $lending_type = null;
    public ?string $longitude = null;
    public ?string $name = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?array $region = null;
    public ?int $total = null;
}

/** Request payload for Country#load. */
class CountryLoadMatch
{
    public string $id;
}

/** Request payload for Country#list. */
class CountryListMatch
{
    public ?array $adminregion = null;
    public ?string $capital_city = null;
    public ?string $id = null;
    public ?array $income_level = null;
    public ?string $iso2_code = null;
    public ?string $latitude = null;
    public ?array $lending_type = null;
    public ?string $longitude = null;
    public ?string $name = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?array $region = null;
    public ?int $total = null;
}

/** Indicator entity data model. */
class Indicator
{
    public ?array $country = null;
    public ?string $countryiso3code = null;
    public ?string $date = null;
    public ?int $decimal = null;
    public ?string $id = null;
    public ?array $indicator = null;
    public ?string $name = null;
    public ?string $obs_status = null;
    public ?array $source = null;
    public ?string $source_note = null;
    public ?string $source_organization = null;
    public ?array $topic = null;
    public ?string $unit = null;
    public ?float $value = null;
}

/** Request payload for Indicator#load. */
class IndicatorLoadMatch
{
    public ?string $country_code = null;
    public string $id;
}

/** Request payload for Indicator#list. */
class IndicatorListMatch
{
    public ?array $country = null;
    public ?string $countryiso3code = null;
    public ?string $date = null;
    public ?int $decimal = null;
    public ?string $id = null;
    public ?array $indicator = null;
    public ?string $name = null;
    public ?string $obs_status = null;
    public ?array $source = null;
    public ?string $source_note = null;
    public ?string $source_organization = null;
    public ?array $topic = null;
    public ?string $unit = null;
    public ?float $value = null;
}

/** Metadata entity data model. */
class Metadata
{
    public ?string $code = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $iso2code = null;
    public ?string $lastupdated = null;
    public ?string $name = null;
    public ?string $url = null;
    public ?string $value = null;
}

/** Request payload for Metadata#list. */
class MetadataListMatch
{
    public ?int $source_id = null;
}

/** Topic entity data model. */
class Topic
{
    public ?string $id = null;
    public ?string $source_note = null;
    public ?string $value = null;
}

/** Request payload for Topic#list. */
class TopicListMatch
{
    public ?string $id = null;
    public ?string $source_note = null;
    public ?string $value = null;
}

