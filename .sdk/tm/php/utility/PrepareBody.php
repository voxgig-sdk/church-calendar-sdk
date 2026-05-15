<?php
declare(strict_types=1);

// ChurchCalendar SDK utility: prepare_body

class ChurchCalendarPrepareBody
{
    public static function call(ChurchCalendarContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
