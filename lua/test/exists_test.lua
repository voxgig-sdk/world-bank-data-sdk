-- ProjectName SDK exists test

local sdk = require("world-bank-data_sdk")

describe("WorldBankDataSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
