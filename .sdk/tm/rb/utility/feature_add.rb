# WorldBankData SDK utility: feature_add
module WorldBankDataUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
