

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"code":{"a":true,"h":"Code","n":"code","r":false,"t":"`$STRING`","key$":"code","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"iso2code":{"a":true,"h":"Iso2code","n":"iso2code","r":false,"t":"`$STRING`","key$":"iso2code","index$":3},"lastupdated":{"a":true,"h":"Lastupdated","n":"lastupdated","r":false,"t":"`$STRING`","key$":"lastupdated","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":5},"url":{"a":true,"h":"Url","n":"url","r":false,"t":"`$STRING`","key$":"url","index$":6},"value":{"a":true,"h":"Value","n":"value","r":false,"t":"`$STRING`","key$":"value","index$":7}},"id":{"field":"id","name":"id"},"name":"metadata","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /source/{sourceId}/indicator","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"source_id","or":"source_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":"json","k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/source/{sourceId}/indicator","q":{"exist":["format","page","per_page","source_id"]},"r":{"param":{"sourceId":"source_id"}},"s":[{"lit":"source"},{"var":"source_id"},{"lit":"indicator"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /incomelevel","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"json","k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/incomelevel","q":{"exist":["format","page","per_page"]},"r":{},"s":[{"lit":"incomelevel"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /lendingtype","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"json","k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/lendingtype","q":{"exist":["format","page","per_page"]},"r":{},"s":[{"lit":"lendingtype"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /region","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"json","k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/region","q":{"exist":["format","page","per_page"]},"r":{},"s":[{"lit":"region"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"GET /source","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"json","k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/source","q":{"exist":["format","page","per_page"]},"r":{},"s":[{"lit":"source"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"metadata","name__orig":"metadata","Name":"Metadata","name_":"metadata","name-":"metadata","NAME":"METADATA","index$":2}, {"active":true,"entity":"metadata","key$":"BasicMetadataFlow","kind":"basic","name":"BasicMetadataFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"metadata_ref01"}}],"index$":0}]}, 'Metadata', {"GET /source/{sourceId}/indicator":{"protocol":"http","operationId":"getIndicatorsBySource","responses":{"200":{"description":"Successful response with indicators from the source","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","key$":"items"}}}}},"404":{"description":"Source not found"}},"parameters":[{"name":"sourceId","in":"path","required":true,"description":"Source ID (e.g., 2 for World Development Indicators)","schema":{"type":"integer"},"index$":0},{"name":"format","in":"query","description":"Response format (json or xml)","schema":{"type":"string","enum":["json","xml"],"default":"json"},"index$":1},{"name":"page","in":"query","description":"Page number for pagination","schema":{"type":"integer","minimum":1,"default":1},"index$":2},{"name":"per_page","in":"query","description":"Number of results per page","schema":{"type":"integer","minimum":1,"maximum":32500,"default":50},"index$":3}],"securitySource":"unspecified"},"GET /incomelevel":{"protocol":"http","operationId":"getIncomeLevels","responses":{"200":{"description":"Successful response with income level list","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","key$":"id"},"iso2code":{"type":"string","key$":"iso2code"},"value":{"type":"string","key$":"value"}},"index$":0}}}}}},"parameters":[{"name":"format","in":"query","description":"Response format (json or xml)","schema":{"type":"string","enum":["json","xml"],"default":"json"},"index$":0},{"name":"page","in":"query","description":"Page number for pagination","schema":{"type":"integer","minimum":1,"default":1},"index$":1},{"name":"per_page","in":"query","description":"Number of results per page","schema":{"type":"integer","minimum":1,"maximum":1000,"default":50},"index$":2}],"securitySource":"unspecified"},"GET /lendingtype":{"protocol":"http","operationId":"getLendingTypes","responses":{"200":{"description":"Successful response with lending type list","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","key$":"id"},"iso2code":{"type":"string","key$":"iso2code"},"value":{"type":"string","key$":"value"}},"index$":0}}}}}},"parameters":[{"name":"format","in":"query","description":"Response format (json or xml)","schema":{"type":"string","enum":["json","xml"],"default":"json"},"index$":0},{"name":"page","in":"query","description":"Page number for pagination","schema":{"type":"integer","minimum":1,"default":1},"index$":1},{"name":"per_page","in":"query","description":"Number of results per page","schema":{"type":"integer","minimum":1,"maximum":1000,"default":50},"index$":2}],"securitySource":"unspecified"},"GET /region":{"protocol":"http","operationId":"getRegions","responses":{"200":{"description":"Successful response with region list","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","key$":"id"},"code":{"type":"string","key$":"code"},"name":{"type":"string","key$":"name"}},"index$":0}}}}}},"parameters":[{"name":"format","in":"query","description":"Response format (json or xml)","schema":{"type":"string","enum":["json","xml"],"default":"json"},"index$":0},{"name":"page","in":"query","description":"Page number for pagination","schema":{"type":"integer","minimum":1,"default":1},"index$":1},{"name":"per_page","in":"query","description":"Number of results per page","schema":{"type":"integer","minimum":1,"maximum":1000,"default":50},"index$":2}],"securitySource":"unspecified"},"GET /source":{"protocol":"http","operationId":"getSources","responses":{"200":{"description":"Successful response with source list","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","key$":"id"},"lastupdated":{"type":"string","key$":"lastupdated"},"name":{"type":"string","key$":"name"},"code":{"type":"string","key$":"code"},"description":{"type":"string","key$":"description"},"url":{"type":"string","key$":"url"}},"index$":0}}}}}},"parameters":[{"name":"format","in":"query","description":"Response format (json or xml)","schema":{"type":"string","enum":["json","xml"],"default":"json"},"index$":0},{"name":"page","in":"query","description":"Page number for pagination","schema":{"type":"integer","minimum":1,"default":1},"index$":1},{"name":"per_page","in":"query","description":"Number of results per page","schema":{"type":"integer","minimum":1,"maximum":1000,"default":50},"index$":2}],"securitySource":"unspecified"}})
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
    ['metadata01','metadata02','metadata03'],
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
  
