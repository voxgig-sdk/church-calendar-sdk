<?php
declare(strict_types=1);

// ChurchCalendar SDK base feature

class ChurchCalendarBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ChurchCalendarContext $ctx, array $options): void {}
    public function PostConstruct(ChurchCalendarContext $ctx): void {}
    public function PostConstructEntity(ChurchCalendarContext $ctx): void {}
    public function SetData(ChurchCalendarContext $ctx): void {}
    public function GetData(ChurchCalendarContext $ctx): void {}
    public function GetMatch(ChurchCalendarContext $ctx): void {}
    public function SetMatch(ChurchCalendarContext $ctx): void {}
    public function PrePoint(ChurchCalendarContext $ctx): void {}
    public function PreSpec(ChurchCalendarContext $ctx): void {}
    public function PreRequest(ChurchCalendarContext $ctx): void {}
    public function PreResponse(ChurchCalendarContext $ctx): void {}
    public function PreResult(ChurchCalendarContext $ctx): void {}
    public function PreDone(ChurchCalendarContext $ctx): void {}
    public function PreUnexpected(ChurchCalendarContext $ctx): void {}
}
