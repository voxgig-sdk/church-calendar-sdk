-- ProjectName SDK exists test

local sdk = require("church-calendar_sdk")

describe("ChurchCalendarSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
