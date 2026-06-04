<?php
declare(strict_types=1);

// Indicator entity test

require_once __DIR__ . '/../worldbankdata_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class IndicatorEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = WorldBankDataSDK::test(null, null);
        $ent = $testsdk->Indicator(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = indicator_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "indicator." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set WORLDBANKDATA_TEST_INDICATOR_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $indicator_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.indicator")));
        $indicator_ref01_data = null;
        if (count($indicator_ref01_data_raw) > 0) {
            $indicator_ref01_data = Helpers::to_map($indicator_ref01_data_raw[0][1]);
        }

        // LIST
        $indicator_ref01_ent = $client->Indicator(null);
        $indicator_ref01_match = [];

        [$indicator_ref01_list_result, $err] = $indicator_ref01_ent->list($indicator_ref01_match, null);
        $this->assertNull($err);
        $this->assertIsArray($indicator_ref01_list_result);

        // LOAD
        $indicator_ref01_match_dt0 = [
            "id" => $indicator_ref01_data["id"],
        ];
        [$indicator_ref01_data_dt0_loaded, $err] = $indicator_ref01_ent->load($indicator_ref01_match_dt0, null);
        $this->assertNull($err);
        $indicator_ref01_data_dt0_load_result = Helpers::to_map($indicator_ref01_data_dt0_loaded);
        $this->assertNotNull($indicator_ref01_data_dt0_load_result);
        $this->assertEquals($indicator_ref01_data_dt0_load_result["id"], $indicator_ref01_data["id"]);

    }
}

function indicator_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/indicator/IndicatorTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = WorldBankDataSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["indicator01", "indicator02", "indicator03", "country01", "country02", "country03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("WORLDBANKDATA_TEST_INDICATOR_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "WORLDBANKDATA_TEST_INDICATOR_ENTID" => $idmap,
        "WORLDBANKDATA_TEST_LIVE" => "FALSE",
        "WORLDBANKDATA_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["WORLDBANKDATA_TEST_INDICATOR_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["WORLDBANKDATA_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new WorldBankDataSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["WORLDBANKDATA_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["WORLDBANKDATA_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
