# WorldBankData SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

WorldBankDataUtility.registrar = ->(u) {
  u.clean = WorldBankDataUtilities::Clean
  u.done = WorldBankDataUtilities::Done
  u.make_error = WorldBankDataUtilities::MakeError
  u.feature_add = WorldBankDataUtilities::FeatureAdd
  u.feature_hook = WorldBankDataUtilities::FeatureHook
  u.feature_init = WorldBankDataUtilities::FeatureInit
  u.fetcher = WorldBankDataUtilities::Fetcher
  u.make_fetch_def = WorldBankDataUtilities::MakeFetchDef
  u.make_context = WorldBankDataUtilities::MakeContext
  u.make_options = WorldBankDataUtilities::MakeOptions
  u.make_request = WorldBankDataUtilities::MakeRequest
  u.make_response = WorldBankDataUtilities::MakeResponse
  u.make_result = WorldBankDataUtilities::MakeResult
  u.make_point = WorldBankDataUtilities::MakePoint
  u.make_spec = WorldBankDataUtilities::MakeSpec
  u.make_url = WorldBankDataUtilities::MakeUrl
  u.param = WorldBankDataUtilities::Param
  u.prepare_auth = WorldBankDataUtilities::PrepareAuth
  u.prepare_body = WorldBankDataUtilities::PrepareBody
  u.prepare_headers = WorldBankDataUtilities::PrepareHeaders
  u.prepare_method = WorldBankDataUtilities::PrepareMethod
  u.prepare_params = WorldBankDataUtilities::PrepareParams
  u.prepare_path = WorldBankDataUtilities::PreparePath
  u.prepare_query = WorldBankDataUtilities::PrepareQuery
  u.result_basic = WorldBankDataUtilities::ResultBasic
  u.result_body = WorldBankDataUtilities::ResultBody
  u.result_headers = WorldBankDataUtilities::ResultHeaders
  u.transform_request = WorldBankDataUtilities::TransformRequest
  u.transform_response = WorldBankDataUtilities::TransformResponse
}
