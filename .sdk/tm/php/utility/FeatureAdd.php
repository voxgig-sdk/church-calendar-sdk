<?php
declare(strict_types=1);

// ChurchCalendar SDK utility: feature_add

class ChurchCalendarFeatureAdd
{
    public static function call(ChurchCalendarContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
