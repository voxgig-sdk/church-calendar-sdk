<?php
declare(strict_types=1);

// ChurchCalendar SDK exists test

require_once __DIR__ . '/../churchcalendar_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = ChurchCalendarSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
