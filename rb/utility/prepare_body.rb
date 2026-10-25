# WorldBankData SDK utility: prepare_body
require_relative 'media'
module WorldBankDataUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return WorldBankDataUtilities.raw_body(ctx.reqdata) if WorldBankDataUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
