<?php
declare(strict_types=1);

// Typed models for the ChurchCalendar SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Calendar entity data model. */
class Calendar
{
    public ?string $colour = null;
    public ?string $description = null;
    public ?string $name = null;
    public ?string $rank = null;
    public ?float $rank_num = null;
    public ?string $system = null;
    public ?string $title = null;
}

/** Request payload for Calendar#list. */
class CalendarListMatch
{
    public ?string $calendar = null;
    public ?int $day = null;
    public ?int $month = null;
    public ?int $year = null;
    public ?string $locale = null;
}

