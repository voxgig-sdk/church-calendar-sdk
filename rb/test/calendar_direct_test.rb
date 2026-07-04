# Calendar direct test

require "minitest/autorun"
require "json"
require_relative "../ChurchCalendar_sdk"
require_relative "runner"

class CalendarDirectTest < Minitest::Test
  def test_direct_list_calendar
    setup = calendar_direct_setup([
      { "id" => "direct01" },
      { "id" => "direct02" },
    ])
    _should_skip, _reason = Runner.is_control_skipped("direct", "direct-list-calendar", setup[:live] ? "live" : "unit")
    if _should_skip
      skip(_reason || "skipped via sdk-test-control.json")
      return
    end
    if setup[:live]
      ["calendar01", "day01", "month01", "year01"].each do |_live_key|
        if setup[:idmap][_live_key].nil?
          skip "live test needs #{_live_key} via *_ENTID env var (synthetic IDs only)"
          return
        end
      end
    end
    client = setup[:client]

    params = {}
    if setup[:live]
      params["calendar"] = setup[:idmap]["calendar01"]
    else
      params["calendar"] = "direct01"
    end
    if setup[:live]
      params["day"] = setup[:idmap]["day01"]
    else
      params["day"] = "direct01"
    end
    if setup[:live]
      params["month"] = setup[:idmap]["month01"]
    else
      params["month"] = "direct01"
    end
    if setup[:live]
      params["year"] = setup[:idmap]["year01"]
    else
      params["year"] = "direct01"
    end

    result = client.direct({
      "path" => "api/v0/en/calendars/{calendar}/{year}/{month}/{day}",
      "method" => "GET",
      "params" => params,
    })
    if setup[:live]
      # Live mode is lenient: synthetic IDs frequently 4xx and the list-
      # response shape varies wildly across public APIs. Skip rather than
      # fail when the call doesn't return a usable list.
      if !result["err"].nil?
        skip("list call failed (likely synthetic IDs against live API): #{result["err"]}")
        return
      end
      unless result["ok"]
        skip("list call not ok (likely synthetic IDs against live API)")
        return
      end
      status = Helpers.to_int(result["status"])
      if status < 200 || status >= 300
        skip("expected 2xx status, got #{status}")
        return
      end
    else
      assert_nil result["err"]
      assert result["ok"]
      assert_equal 200, Helpers.to_int(result["status"])
      assert result["data"].is_a?(Array)
      assert_equal 2, result["data"].length
      assert_equal 1, setup[:calls].length
    end
  end

end


def calendar_direct_setup(mockres)
  Runner.load_env_local

  calls = []

  env = Runner.env_override({
    "CHURCHCALENDAR_TEST_CALENDAR_ENTID" => {},
    "CHURCHCALENDAR_TEST_LIVE" => "FALSE",
  })

  live = env["CHURCHCALENDAR_TEST_LIVE"] == "TRUE"

  if live
    merged_opts = {
    }
    client = ChurchCalendarSDK.new(merged_opts)
    return {
      client: client,
      calls: calls,
      live: true,
      idmap: {},
    }
  end

  mock_fetch = ->(url, init) {
    calls.push({ "url" => url, "init" => init })
    return {
      "status" => 200,
      "statusText" => "OK",
      "headers" => {},
      "json" => ->() {
        if !mockres.nil?
          return mockres
        end
        return { "id" => "direct01" }
      },
      "body" => "mock",
    }, nil
  }

  client = ChurchCalendarSDK.new({
    "base" => "http://localhost:8080",
    "system" => {
      "fetch" => mock_fetch,
    },
  })

  {
    client: client,
    calls: calls,
    live: false,
    idmap: {},
  }
end
