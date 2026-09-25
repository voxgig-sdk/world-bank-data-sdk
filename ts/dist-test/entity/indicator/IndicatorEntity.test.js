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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "country": { "a": true, "h": "Country", "n": "country", "r": false, "t": "`$OBJECT`", "key$": "country", "index$": 0 }, "countryiso3code": { "a": true, "h": "Countryiso3code", "n": "countryiso3code", "r": false, "t": "`$STRING`", "key$": "countryiso3code", "index$": 1 }, "date": { "a": true, "h": "Date", "n": "date", "r": false, "t": "`$STRING`", "key$": "date", "index$": 2 }, "decimal": { "a": true, "h": "Decimal", "n": "decimal", "r": false, "t": "`$INTEGER`", "key$": "decimal", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 4 }, "indicator": { "a": true, "h": "Indicator", "n": "indicator", "r": false, "t": "`$OBJECT`", "key$": "indicator", "index$": 5 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 6 }, "obs_status": { "a": true, "h": "Obs Status", "n": "obs_status", "r": false, "t": "`$STRING`", "key$": "obs_status", "index$": 7 }, "source": { "a": true, "h": "Source", "n": "source", "r": false, "t": "`$OBJECT`", "key$": "source", "index$": 8 }, "sourceNote": { "a": true, "h": "Source Note", "n": "sourceNote", "r": false, "t": "`$STRING`", "key$": "sourceNote", "index$": 9 }, "sourceOrganization": { "a": true, "h": "Source Organization", "n": "sourceOrganization", "r": false, "t": "`$STRING`", "key$": "sourceOrganization", "index$": 10 }, "topics": { "a": true, "h": "Topics", "n": "topics", "r": false, "t": "`$ARRAY`", "key$": "topics", "index$": 11 }, "unit": { "a": true, "h": "Unit", "n": "unit", "r": false, "t": "`$STRING`", "key$": "unit", "index$": 12 }, "value": { "a": true, "h": "Value", "n": "value", "r": false, "t": "`$NUMBER`", "key$": "value", "index$": 13 } }, "id": { "field": "id", "name": "id" }, "name": "indicator", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /indicator", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "json", "k": "query", "n": "format", "or": "format", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": 50, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "source", "or": "source", "r": false, "t": "`$INTEGER`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/indicator", "q": { "exist": ["format", "page", "per_page", "source"] }, "r": {}, "s": [{ "lit": "indicator" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /countries/{countryCode}/indicators/{indicatorCode}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "country_code", "or": "country_code", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "indicator_code", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "date", "or": "date", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "json", "k": "query", "n": "format", "or": "format", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "frequency", "or": "frequency", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "N", "k": "query", "n": "gapfill", "or": "gapfill", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "mrv", "or": "mrv", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "ex": 50, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 6 }] }, "k": "http", "m": "GET", "o": "/countries/{countryCode}/indicators/{indicatorCode}", "q": { "exist": ["country_code", "date", "format", "frequency", "gapfill", "id", "mrv", "page", "per_page"] }, "r": { "param": { "countryCode": "country_code", "indicatorCode": "id" } }, "s": [{ "lit": "countries" }, { "var": "country_code" }, { "lit": "indicators" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /indicator/{indicatorCode}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "indicator_code", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "json", "k": "query", "n": "format", "or": "format", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/indicator/{indicatorCode}", "q": { "exist": ["format", "id"] }, "r": { "param": { "indicatorCode": "id" } }, "s": [{ "lit": "indicator" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.country"]] }, "key$": "indicator", "name__orig": "indicator", "Name": "Indicator", "name_": "indicator", "name-": "indicator", "NAME": "INDICATOR", "index$": 1 }, { "active": true, "entity": "indicator", "key$": "BasicIndicatorFlow", "kind": "basic", "name": "BasicIndicatorFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "indicator_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "indicator_ref01", "srcdatavar": "indicator_ref01_data", "suffix": "_dt0" }, "m": { "id": "indicator01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-indicator_ref01" } }], "index$": 1 }] }, 'Indicator', { "GET /indicator": { "protocol": "http", "operationId": "getIndicators", "responses": { "200": { "description": "Successful response with indicator list", "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "key$": "items" } } } } }, "400": { "description": "Bad request - invalid parameters" } }, "parameters": [{ "name": "format", "in": "query", "description": "Response format (json or xml)", "schema": { "type": "string", "enum": ["json", "xml"], "default": "json" }, "index$": 0 }, { "name": "page", "in": "query", "description": "Page number for pagination", "schema": { "type": "integer", "minimum": 1, "default": 1 }, "index$": 1 }, { "name": "per_page", "in": "query", "description": "Number of results per page", "schema": { "type": "integer", "minimum": 1, "maximum": 32500, "default": 50 }, "index$": 2 }, { "name": "source", "in": "query", "description": "Filter by source ID", "schema": { "type": "integer" }, "index$": 3 }], "securitySource": "unspecified" }, "GET /countries/{countryCode}/indicators/{indicatorCode}": { "protocol": "http", "operationId": "getCountryIndicatorData", "responses": { "200": { "description": "Successful response with indicator data", "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "properties": { "indicator": { "type": "object", "properties": { "id": { "type": "string" }, "value": { "type": "string" } }, "key$": "indicator" }, "country": { "type": "object", "properties": { "id": { "type": "string" }, "value": { "type": "string" } }, "key$": "country" }, "countryiso3code": { "type": "string", "key$": "countryiso3code" }, "date": { "type": "string", "key$": "date" }, "value": { "type": "number", "key$": "value" }, "unit": { "type": "string", "key$": "unit" }, "obs_status": { "type": "string", "key$": "obs_status" }, "decimal": { "type": "integer", "key$": "decimal" } }, "key$": "items" } } } } }, "400": { "description": "Bad request - invalid parameters" }, "404": { "description": "Country or indicator not found" } }, "parameters": [{ "name": "countryCode", "in": "path", "required": true, "description": "ISO 2-letter or 3-letter country code, or 'all' for all countries", "schema": { "type": "string" }, "index$": 0 }, { "name": "indicatorCode", "in": "path", "required": true, "description": "Indicator code (e.g., NY.GDP.MKTP.CD for GDP)", "schema": { "type": "string" }, "index$": 1 }, { "name": "format", "in": "query", "description": "Response format (json or xml)", "schema": { "type": "string", "enum": ["json", "xml"], "default": "json" }, "index$": 2 }, { "name": "date", "in": "query", "description": "Date range (e.g., 2010:2020 or specific year like 2020)", "schema": { "type": "string" }, "index$": 3 }, { "name": "page", "in": "query", "description": "Page number for pagination", "schema": { "type": "integer", "minimum": 1, "default": 1 }, "index$": 4 }, { "name": "per_page", "in": "query", "description": "Number of results per page", "schema": { "type": "integer", "minimum": 1, "maximum": 32500, "default": 50 }, "index$": 5 }, { "name": "mrv", "in": "query", "description": "Most recent values - number of most recent values to return", "schema": { "type": "integer", "minimum": 1 }, "index$": 6 }, { "name": "gapfill", "in": "query", "description": "Fill gaps in data with Y (yes) or N (no)", "schema": { "type": "string", "enum": ["Y", "N"], "default": "N" }, "index$": 7 }, { "name": "frequency", "in": "query", "description": "Data frequency (Y for yearly, Q for quarterly, M for monthly)", "schema": { "type": "string", "enum": ["Y", "Q", "M"] }, "index$": 8 }], "securitySource": "unspecified" }, "GET /indicator/{indicatorCode}": { "protocol": "http", "operationId": "getIndicatorByCode", "responses": { "200": { "description": "Successful response with indicator details", "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "type": "string", "key$": "id" }, "name": { "type": "string", "key$": "name" }, "source": { "type": "object", "key$": "source" }, "sourceNote": { "type": "string", "key$": "sourceNote" }, "sourceOrganization": { "type": "string", "key$": "sourceOrganization" }, "topics": { "type": "array", "items": { "type": "object" }, "key$": "topics" } }, "index$": 0 } } } }, "404": { "description": "Indicator not found" } }, "parameters": [{ "name": "indicatorCode", "in": "path", "required": true, "description": "Indicator code (e.g., NY.GDP.MKTP.CD)", "schema": { "type": "string" }, "index$": 0 }, { "name": "format", "in": "query", "description": "Response format (json or xml)", "schema": { "type": "string", "enum": ["json", "xml"], "default": "json" }, "index$": 1 }], "securitySource": "unspecified" } });
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