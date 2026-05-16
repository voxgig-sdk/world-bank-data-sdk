package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCountryEntityFunc func(client *WorldBankDataSDK, entopts map[string]any) WorldBankDataEntity

var NewIndicatorEntityFunc func(client *WorldBankDataSDK, entopts map[string]any) WorldBankDataEntity

var NewMetadataEntityFunc func(client *WorldBankDataSDK, entopts map[string]any) WorldBankDataEntity

var NewTopicEntityFunc func(client *WorldBankDataSDK, entopts map[string]any) WorldBankDataEntity

