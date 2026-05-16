# WorldBankData SDK exists test

require "minitest/autorun"
require_relative "../WorldBankData_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = WorldBankDataSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
