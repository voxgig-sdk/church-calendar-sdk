<?php
declare(strict_types=1);

// ChurchCalendar SDK utility: result_body

class ChurchCalendarResultBody
{
    public static function call(ChurchCalendarContext $ctx): ?ChurchCalendarResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
