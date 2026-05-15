<?php
declare(strict_types=1);

// ChurchCalendar SDK utility registration

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

ChurchCalendarUtility::setRegistrar(function (ChurchCalendarUtility $u): void {
    $u->clean = [ChurchCalendarClean::class, 'call'];
    $u->done = [ChurchCalendarDone::class, 'call'];
    $u->make_error = [ChurchCalendarMakeError::class, 'call'];
    $u->feature_add = [ChurchCalendarFeatureAdd::class, 'call'];
    $u->feature_hook = [ChurchCalendarFeatureHook::class, 'call'];
    $u->feature_init = [ChurchCalendarFeatureInit::class, 'call'];
    $u->fetcher = [ChurchCalendarFetcher::class, 'call'];
    $u->make_fetch_def = [ChurchCalendarMakeFetchDef::class, 'call'];
    $u->make_context = [ChurchCalendarMakeContext::class, 'call'];
    $u->make_options = [ChurchCalendarMakeOptions::class, 'call'];
    $u->make_request = [ChurchCalendarMakeRequest::class, 'call'];
    $u->make_response = [ChurchCalendarMakeResponse::class, 'call'];
    $u->make_result = [ChurchCalendarMakeResult::class, 'call'];
    $u->make_point = [ChurchCalendarMakePoint::class, 'call'];
    $u->make_spec = [ChurchCalendarMakeSpec::class, 'call'];
    $u->make_url = [ChurchCalendarMakeUrl::class, 'call'];
    $u->param = [ChurchCalendarParam::class, 'call'];
    $u->prepare_auth = [ChurchCalendarPrepareAuth::class, 'call'];
    $u->prepare_body = [ChurchCalendarPrepareBody::class, 'call'];
    $u->prepare_headers = [ChurchCalendarPrepareHeaders::class, 'call'];
    $u->prepare_method = [ChurchCalendarPrepareMethod::class, 'call'];
    $u->prepare_params = [ChurchCalendarPrepareParams::class, 'call'];
    $u->prepare_path = [ChurchCalendarPreparePath::class, 'call'];
    $u->prepare_query = [ChurchCalendarPrepareQuery::class, 'call'];
    $u->result_basic = [ChurchCalendarResultBasic::class, 'call'];
    $u->result_body = [ChurchCalendarResultBody::class, 'call'];
    $u->result_headers = [ChurchCalendarResultHeaders::class, 'call'];
    $u->transform_request = [ChurchCalendarTransformRequest::class, 'call'];
    $u->transform_response = [ChurchCalendarTransformResponse::class, 'call'];
});
