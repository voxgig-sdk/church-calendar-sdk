<?php
declare(strict_types=1);

// ChurchCalendar SDK configuration

class ChurchCalendarConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "ChurchCalendar",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "http://calapi.inadiutorium.cz",
                "auth" => [
                    "prefix" => "Bearer",
                ],
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
              'active' => true,
              'name' => 'colour',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'rank',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'rank_num',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'system',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'title',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
          ],
          'name' => 'calendar',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'default',
                        'kind' => 'param',
                        'name' => 'calendar',
                        'orig' => 'calendar',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 25,
                        'kind' => 'param',
                        'name' => 'day',
                        'orig' => 'day',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 12,
                        'kind' => 'param',
                        'name' => 'month',
                        'orig' => 'month',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 2024,
                        'kind' => 'param',
                        'name' => 'year',
                        'orig' => 'year',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/api/v0/en/calendars/{calendar}/{year}/{month}/{day}',
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
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'en',
                        'kind' => 'param',
                        'name' => 'locale',
                        'orig' => 'locale',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/api/v0/{locale}/calendars',
                  'parts' => [
                    'api',
                    'v0',
                    '{locale}',
                    'calendars',
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
                  'index$' => 1,
                ],
              ],
              'key$' => 'list',
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
