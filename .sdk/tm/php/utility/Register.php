<?php
declare(strict_types=1);

// WorldBankData SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

WorldBankDataUtility::setRegistrar(function (WorldBankDataUtility $u): void {
    $u->clean = [WorldBankDataClean::class, 'call'];
    $u->done = [WorldBankDataDone::class, 'call'];
    $u->make_error = [WorldBankDataMakeError::class, 'call'];
    $u->feature_add = [WorldBankDataFeatureAdd::class, 'call'];
    $u->feature_hook = [WorldBankDataFeatureHook::class, 'call'];
    $u->feature_init = [WorldBankDataFeatureInit::class, 'call'];
    $u->fetcher = [WorldBankDataFetcher::class, 'call'];
    $u->make_fetch_def = [WorldBankDataMakeFetchDef::class, 'call'];
    $u->make_context = [WorldBankDataMakeContext::class, 'call'];
    $u->make_options = [WorldBankDataMakeOptions::class, 'call'];
    $u->make_request = [WorldBankDataMakeRequest::class, 'call'];
    $u->make_response = [WorldBankDataMakeResponse::class, 'call'];
    $u->make_result = [WorldBankDataMakeResult::class, 'call'];
    $u->make_point = [WorldBankDataMakePoint::class, 'call'];
    $u->make_spec = [WorldBankDataMakeSpec::class, 'call'];
    $u->make_url = [WorldBankDataMakeUrl::class, 'call'];
    $u->param = [WorldBankDataParam::class, 'call'];
    $u->prepare_auth = [WorldBankDataPrepareAuth::class, 'call'];
    $u->prepare_body = [WorldBankDataPrepareBody::class, 'call'];
    $u->prepare_headers = [WorldBankDataPrepareHeaders::class, 'call'];
    $u->prepare_method = [WorldBankDataPrepareMethod::class, 'call'];
    $u->prepare_params = [WorldBankDataPrepareParams::class, 'call'];
    $u->prepare_path = [WorldBankDataPreparePath::class, 'call'];
    $u->prepare_query = [WorldBankDataPrepareQuery::class, 'call'];
    $u->result_basic = [WorldBankDataResultBasic::class, 'call'];
    $u->result_body = [WorldBankDataResultBody::class, 'call'];
    $u->result_headers = [WorldBankDataResultHeaders::class, 'call'];
    $u->transform_request = [WorldBankDataTransformRequest::class, 'call'];
    $u->transform_response = [WorldBankDataTransformResponse::class, 'call'];
});
