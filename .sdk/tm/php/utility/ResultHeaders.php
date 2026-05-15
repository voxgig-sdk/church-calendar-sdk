<?php
declare(strict_types=1);

// ChurchCalendar SDK utility: result_headers

class ChurchCalendarResultHeaders
{
    public static function call(ChurchCalendarContext $ctx): ?ChurchCalendarResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
