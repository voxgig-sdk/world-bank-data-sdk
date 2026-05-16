# WorldBankData SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module WorldBankDataFeatures
  def self.make_feature(name)
    case name
    when "base"
      WorldBankDataBaseFeature.new
    when "test"
      WorldBankDataTestFeature.new
    else
      WorldBankDataBaseFeature.new
    end
  end
end
