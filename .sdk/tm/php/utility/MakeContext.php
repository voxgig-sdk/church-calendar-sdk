<?php
declare(strict_types=1);

// ChurchCalendar SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ChurchCalendarMakeContext
{
    public static function call(array $ctxmap, ?ChurchCalendarContext $basectx): ChurchCalendarContext
    {
        return new ChurchCalendarContext($ctxmap, $basectx);
    }
}
