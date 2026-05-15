<?php
declare(strict_types=1);

// ChurchCalendar SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ChurchCalendarFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ChurchCalendarBaseFeature();
            case "test":
                return new ChurchCalendarTestFeature();
            default:
                return new ChurchCalendarBaseFeature();
        }
    }
}
