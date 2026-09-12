<?php
declare(strict_types=1);

// ChurchCalendar SDK configuration

class ChurchCalendarConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "ChurchCalendar",
                "slug" => "church-calendar",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "http://calapi.inadiutorium.cz",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "calendar" => [],
                ],
            ],
            "entity" => [
        'calendar' => [
          'fields' => [
            [
              'name' => 'celebrations',
              'short' => 'List of liturgical celebrations for this date',
              'type' => '`$ARRAY`',
            ],
            [
              'format' => 'date',
              'name' => 'date',
              'short' => 'The requested date',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'short' => 'Description of the calendar system',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'short' => 'Human-readable name of the calendar',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'season',
              'short' => 'Liturgical season',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'season_week',
              'short' => 'Week number within the liturgical season',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'system',
              'short' => 'Calendar system identifier',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'weekday',
              'short' => 'Day of the week',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'from' => [
              'calendar' => 'name',
            ],
            'name' => 'id',
            'parts' => [
              'calendar',
              'year',
              'month',
              'day',
            ],
            'sep' => '/',
          ],
          'name' => 'calendar',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'en',
                        'kind' => 'param',
                        'name' => 'locale',
                        'orig' => 'locale',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v0/{locale}/calendars',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'v0',
                    ],
                    [
                      'var' => 'locale',
                    ],
                    [
                      'lit' => 'calendars',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'locale',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'api',
                    'v0',
                    '{locale}',
                    'calendars',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'default',
                        'kind' => 'param',
                        'name' => 'calendar',
                        'orig' => 'calendar',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 25,
                        'kind' => 'param',
                        'name' => 'day',
                        'orig' => 'day',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 12,
                        'kind' => 'param',
                        'name' => 'month',
                        'orig' => 'month',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 2024,
                        'kind' => 'param',
                        'name' => 'year',
                        'orig' => 'year',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v0/en/calendars/{calendar}/{year}/{month}/{day}',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'v0',
                    ],
                    [
                      'lit' => 'en',
                    ],
                    [
                      'lit' => 'calendars',
                    ],
                    [
                      'var' => 'calendar',
                    ],
                    [
                      'var' => 'year',
                    ],
                    [
                      'var' => 'month',
                    ],
                    [
                      'var' => 'day',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'calendar',
                      'day',
                      'month',
                      'year',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'api',
                    'v0',
                    'en',
                    'calendars',
                    '{calendar}',
                    '{year}',
                    '{month}',
                    '{day}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'calendar',
              ],
              [
                'v0',
              ],
            ],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return ChurchCalendarFeatures::make_feature($name);
    }
}
