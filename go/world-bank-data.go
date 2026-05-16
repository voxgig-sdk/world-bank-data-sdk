package voxgigworldbankdatasdk

import (
	"github.com/voxgig-sdk/world-bank-data-sdk/core"
	"github.com/voxgig-sdk/world-bank-data-sdk/entity"
	"github.com/voxgig-sdk/world-bank-data-sdk/feature"
	_ "github.com/voxgig-sdk/world-bank-data-sdk/utility"
)

// Type aliases preserve external API.
type WorldBankDataSDK = core.WorldBankDataSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type WorldBankDataEntity = core.WorldBankDataEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type WorldBankDataError = core.WorldBankDataError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCountryEntityFunc = func(client *core.WorldBankDataSDK, entopts map[string]any) core.WorldBankDataEntity {
		return entity.NewCountryEntity(client, entopts)
	}
	core.NewIndicatorEntityFunc = func(client *core.WorldBankDataSDK, entopts map[string]any) core.WorldBankDataEntity {
		return entity.NewIndicatorEntity(client, entopts)
	}
	core.NewMetadataEntityFunc = func(client *core.WorldBankDataSDK, entopts map[string]any) core.WorldBankDataEntity {
		return entity.NewMetadataEntity(client, entopts)
	}
	core.NewTopicEntityFunc = func(client *core.WorldBankDataSDK, entopts map[string]any) core.WorldBankDataEntity {
		return entity.NewTopicEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewWorldBankDataSDK = core.NewWorldBankDataSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
