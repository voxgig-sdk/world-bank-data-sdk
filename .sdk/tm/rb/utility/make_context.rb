# WorldBankData SDK utility: make_context
require_relative '../core/context'
module WorldBankDataUtilities
  MakeContext = ->(ctxmap, basectx) {
    WorldBankDataContext.new(ctxmap, basectx)
  }
end
