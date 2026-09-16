"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('IndicatorEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when WORLD_BANK_DATA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('WORLD_BANK_DATA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.WorldBankDataSDK.test();
        const ent = testsdk.Indicator();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.WORLD_BANK_DATA_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'indicator.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "country", "req": false, "type": "`$OBJECT`", "index$": 0 }, { "active": true, "name": "countryiso3code", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "date", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "decimal", "req": false, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "indicator", "req": false, "type": "`$OBJECT`", "index$": 5 }, { "active": true, "name": "name", "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "obs_status", "req": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "source", "req": false, "type": "`$OBJECT`", "index$": 8 }, { "active": true, "name": "sourceNote", "req": false, "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "sourceOrganization", "req": false, "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "topics", "req": false, "type": "`$ARRAY`", "index$": 11 }, { "active": true, "name": "unit", "req": false, "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "value", "req": false, "type": "`$NUMBER`", "index$": 13 }], "id": { "field": "id", "name": "id" }, "name": "indicator", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "json", "kind": "query", "name": "format", "orig": "format", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "example": 50, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "kind": "query", "name": "source", "orig": "source", "reqd": false, "type": "`$INTEGER`", "index$": 3 }] }, "contract": { "id": "GET /indicator", "json": "{\"operationId\":\"getIndicators\",\"parameters\":[{\"description\":\"Response format (json or xml)\",\"in\":\"query\",\"name\":\"format\",\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"xml\"],\"type\":\"string\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results per page\",\"in\":\"query\",\"name\":\"per_page\",\"schema\":{\"default\":50,\"maximum\":32500,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Filter by source ID\",\"in\":\"query\",\"name\":\"source\",\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with indicator list\"},\"400\":{\"description\":\"Bad request - invalid parameters\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/indicator", "segments": [{ "lit": "indicator" }], "select": { "exist": ["format", "page", "per_page", "source"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "country_code", "orig": "country_code", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "id", "orig": "indicator_code", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "date", "orig": "date", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "json", "kind": "query", "name": "format", "orig": "format", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "query", "name": "frequency", "orig": "frequency", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "example": "N", "kind": "query", "name": "gapfill", "orig": "gapfill", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "kind": "query", "name": "mrv", "orig": "mrv", "reqd": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 5 }, { "active": true, "example": 50, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 6 }] }, "contract": { "id": "GET /countries/{countryCode}/indicators/{indicatorCode}", "json": "{\"operationId\":\"getCountryIndicatorData\",\"parameters\":[{\"description\":\"ISO 2-letter or 3-letter country code, or 'all' for all countries\",\"in\":\"path\",\"name\":\"countryCode\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Indicator code (e.g., NY.GDP.MKTP.CD for GDP)\",\"in\":\"path\",\"name\":\"indicatorCode\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Response format (json or xml)\",\"in\":\"query\",\"name\":\"format\",\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"xml\"],\"type\":\"string\"}},{\"description\":\"Date range (e.g., 2010:2020 or specific year like 2020)\",\"in\":\"query\",\"name\":\"date\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results per page\",\"in\":\"query\",\"name\":\"per_page\",\"schema\":{\"default\":50,\"maximum\":32500,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Most recent values - number of most recent values to return\",\"in\":\"query\",\"name\":\"mrv\",\"schema\":{\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Fill gaps in data with Y (yes) or N (no)\",\"in\":\"query\",\"name\":\"gapfill\",\"schema\":{\"default\":\"N\",\"enum\":[\"Y\",\"N\"],\"type\":\"string\"}},{\"description\":\"Data frequency (Y for yearly, Q for quarterly, M for monthly)\",\"in\":\"query\",\"name\":\"frequency\",\"schema\":{\"enum\":[\"Y\",\"Q\",\"M\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"country\":{\"properties\":{\"id\":{\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"countryiso3code\":{\"type\":\"string\"},\"date\":{\"type\":\"string\"},\"decimal\":{\"type\":\"integer\"},\"indicator\":{\"properties\":{\"id\":{\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"obs_status\":{\"type\":\"string\"},\"unit\":{\"type\":\"string\"},\"value\":{\"type\":\"number\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with indicator data\"},\"400\":{\"description\":\"Bad request - invalid parameters\"},\"404\":{\"description\":\"Country or indicator not found\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/countries/{countryCode}/indicators/{indicatorCode}", "rename": { "param": { "countryCode": "country_code", "indicatorCode": "id" } }, "segments": [{ "lit": "countries" }, { "var": "country_code" }, { "lit": "indicators" }, { "var": "id" }], "select": { "exist": ["country_code", "date", "format", "frequency", "gapfill", "id", "mrv", "page", "per_page"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "indicator_code", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": "json", "kind": "query", "name": "format", "orig": "format", "reqd": false, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /indicator/{indicatorCode}", "json": "{\"operationId\":\"getIndicatorByCode\",\"parameters\":[{\"description\":\"Indicator code (e.g., NY.GDP.MKTP.CD)\",\"in\":\"path\",\"name\":\"indicatorCode\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Response format (json or xml)\",\"in\":\"query\",\"name\":\"format\",\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"xml\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"source\":{\"type\":\"object\"},\"sourceNote\":{\"type\":\"string\"},\"sourceOrganization\":{\"type\":\"string\"},\"topics\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with indicator details\"},\"404\":{\"description\":\"Indicator not found\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/indicator/{indicatorCode}", "rename": { "param": { "indicatorCode": "id" } }, "segments": [{ "lit": "indicator" }, { "var": "id" }], "select": { "exist": ["format", "id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [["country"]] }, "key$": "indicator", "name__orig": "indicator", "Name": "Indicator", "name_": "indicator", "name-": "indicator", "NAME": "INDICATOR", "index$": 1 }, { "active": true, "entity": "indicator", "key$": "BasicIndicatorFlow", "kind": "basic", "name": "BasicIndicatorFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "indicator_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "indicator_ref01", "srcdatavar": "indicator_ref01_data", "suffix": "_dt0" }, "match": { "id": "indicator01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-indicator_ref01" } }], "index$": 1 }] }, 'Indicator');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let indicator_ref01_data = Object.values(setup.data.existing.indicator)[0];
        // LIST
        const indicator_ref01_ent = client.Indicator();
        const indicator_ref01_match = {};
        const indicator_ref01_list = (await indicator_ref01_ent.list(indicator_ref01_match)).map((e) => e.data());
        // LOAD
        const indicator_ref01_match_dt0 = {};
        indicator_ref01_match_dt0.id = indicator_ref01_data.id;
        const indicator_ref01_data_dt0 = (await indicator_ref01_ent.load(indicator_ref01_match_dt0)).data();
        (0, node_assert_1.default)(indicator_ref01_data_dt0.id === indicator_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/indicator/IndicatorTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.WorldBankDataSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['indicator01', 'indicator02', 'indicator03', 'country01', 'country02', 'country03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'WORLD_BANK_DATA_TEST_INDICATOR_ENTID': idmap,
        'WORLD_BANK_DATA_TEST_LIVE': 'FALSE',
        'WORLD_BANK_DATA_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['WORLD_BANK_DATA_TEST_INDICATOR_ENTID'];
    const live = 'TRUE' === env.WORLD_BANK_DATA_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['WORLD_BANK_DATA_TEST_INDICATOR_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.WorldBankDataSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.WORLD_BANK_DATA_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=IndicatorEntity.test.js.map