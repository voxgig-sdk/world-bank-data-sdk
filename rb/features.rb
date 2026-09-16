# WorldBankData SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module WorldBankDataFeatures
  def self.make_feature(name)
    case name
    when "base"
      WorldBankDataBaseFeature.new
    when "ratelimit"
      WorldBankDataRatelimitFeature.new
    when "retry"
      WorldBankDataRetryFeature.new
    when "test"
      WorldBankDataTestFeature.new
    when "timeout"
      WorldBankDataTimeoutFeature.new
    else
      WorldBankDataBaseFeature.new
    end
  end
end
