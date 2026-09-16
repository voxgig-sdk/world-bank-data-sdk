

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { WorldBankDataSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('MetadataEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WORLD_BANK_DATA_TEST_LIVE=TRUE.
  afterEach(liveDelay('WORLD_BANK_DATA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WorldBankDataSDK.test()
    const ent = testsdk.Metadata()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WORLD_BANK_DATA_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'metadata.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"code","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"iso2code","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"lastupdated","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"url","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"value","req":false,"type":"`$STRING`","index$":7}],"id":{"field":"id","name":"id"},"name":"metadata","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"source_id","orig":"source_id","reqd":true,"type":"`$INTEGER`","index$":0}],"query":[{"active":true,"example":"json","kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":50,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /source/{sourceId}/indicator","json":"{\"operationId\":\"getIndicatorsBySource\",\"parameters\":[{\"description\":\"Source ID (e.g., 2 for World Development Indicators)\",\"in\":\"path\",\"name\":\"sourceId\",\"required\":true,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Response format (json or xml)\",\"in\":\"query\",\"name\":\"format\",\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"xml\"],\"type\":\"string\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results per page\",\"in\":\"query\",\"name\":\"per_page\",\"schema\":{\"default\":50,\"maximum\":32500,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with indicators from the source\"},\"404\":{\"description\":\"Source not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/source/{sourceId}/indicator","rename":{"param":{"sourceId":"source_id"}},"segments":[{"lit":"source"},{"var":"source_id"},{"lit":"indicator"}],"select":{"exist":["format","page","per_page","source_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"example":"json","kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":50,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /incomelevel","json":"{\"operationId\":\"getIncomeLevels\",\"parameters\":[{\"description\":\"Response format (json or xml)\",\"in\":\"query\",\"name\":\"format\",\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"xml\"],\"type\":\"string\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results per page\",\"in\":\"query\",\"name\":\"per_page\",\"schema\":{\"default\":50,\"maximum\":1000,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"id\":{\"type\":\"string\"},\"iso2code\":{\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with income level list\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/incomelevel","segments":[{"lit":"incomelevel"}],"select":{"exist":["format","page","per_page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"example":"json","kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":50,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /lendingtype","json":"{\"operationId\":\"getLendingTypes\",\"parameters\":[{\"description\":\"Response format (json or xml)\",\"in\":\"query\",\"name\":\"format\",\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"xml\"],\"type\":\"string\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results per page\",\"in\":\"query\",\"name\":\"per_page\",\"schema\":{\"default\":50,\"maximum\":1000,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"id\":{\"type\":\"string\"},\"iso2code\":{\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with lending type list\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/lendingtype","segments":[{"lit":"lendingtype"}],"select":{"exist":["format","page","per_page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2},{"active":true,"args":{"query":[{"active":true,"example":"json","kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":50,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /region","json":"{\"operationId\":\"getRegions\",\"parameters\":[{\"description\":\"Response format (json or xml)\",\"in\":\"query\",\"name\":\"format\",\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"xml\"],\"type\":\"string\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results per page\",\"in\":\"query\",\"name\":\"per_page\",\"schema\":{\"default\":50,\"maximum\":1000,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"code\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with region list\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/region","segments":[{"lit":"region"}],"select":{"exist":["format","page","per_page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":3},{"active":true,"args":{"query":[{"active":true,"example":"json","kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":50,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /source","json":"{\"operationId\":\"getSources\",\"parameters\":[{\"description\":\"Response format (json or xml)\",\"in\":\"query\",\"name\":\"format\",\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"xml\"],\"type\":\"string\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results per page\",\"in\":\"query\",\"name\":\"per_page\",\"schema\":{\"default\":50,\"maximum\":1000,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"code\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"lastupdated\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"url\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with source list\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/source","segments":[{"lit":"source"}],"select":{"exist":["format","page","per_page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":4}],"key$":"list"}},"relations":{"ancestors":[["source"]]},"key$":"metadata","name__orig":"metadata","Name":"Metadata","name_":"metadata","name-":"metadata","NAME":"METADATA","index$":2}, {"active":true,"entity":"metadata","key$":"BasicMetadataFlow","kind":"basic","name":"BasicMetadataFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"metadata_ref01"}}],"index$":0}]}, 'Metadata')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let metadata_ref01_data = Object.values(setup.data.existing.metadata)[0] as any

    // LIST
    const metadata_ref01_ent = client.Metadata()
    const metadata_ref01_match: any = {}

    const metadata_ref01_list = (await metadata_ref01_ent.list(metadata_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/metadata/MetadataTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = WorldBankDataSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['metadata01','metadata02','metadata03','source01','source02','source03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WORLD_BANK_DATA_TEST_METADATA_ENTID': idmap,
    'WORLD_BANK_DATA_TEST_LIVE': 'FALSE',
    'WORLD_BANK_DATA_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WORLD_BANK_DATA_TEST_METADATA_ENTID']

  const live = 'TRUE' === env.WORLD_BANK_DATA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WORLD_BANK_DATA_TEST_METADATA_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new WorldBankDataSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
