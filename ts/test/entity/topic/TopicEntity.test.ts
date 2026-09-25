

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


describe('TopicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WORLD_BANK_DATA_TEST_LIVE=TRUE.
  afterEach(liveDelay('WORLD_BANK_DATA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WorldBankDataSDK.test()
    const ent = testsdk.Topic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WORLD_BANK_DATA_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'topic.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"sourceNote":{"a":true,"h":"Source Note","n":"sourceNote","r":false,"t":"`$STRING`","key$":"sourceNote","index$":1},"value":{"a":true,"h":"Value","n":"value","r":false,"t":"`$STRING`","key$":"value","index$":2}},"id":{"field":"id","name":"id"},"name":"topic","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /topic/{topicId}/indicator","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"topic_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":"json","k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/topic/{topicId}/indicator","q":{"$action":"indicator","exist":["format","id","page","per_page"]},"r":{"param":{"topicId":"id"}},"s":[{"lit":"topic"},{"var":"id"},{"lit":"indicator"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /topic","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"json","k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/topic","q":{"exist":["format","page","per_page"]},"r":{},"s":[{"lit":"topic"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"topic","name__orig":"topic","Name":"Topic","name_":"topic","name-":"topic","NAME":"TOPIC","index$":3}, {"active":true,"entity":"topic","key$":"BasicTopicFlow","kind":"basic","name":"BasicTopicFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"topic_ref01"}}],"index$":0}]}, 'Topic', {"GET /topic/{topicId}/indicator":{"protocol":"http","operationId":"getIndicatorsByTopic","responses":{"200":{"description":"Successful response with indicators for the topic","content":{"application/json":{"schema":{"type":"array","items":{"type":"object"}}}}},"404":{"description":"Topic not found"}},"parameters":[{"name":"topicId","in":"path","required":true,"description":"Topic ID (e.g., 1 for Agriculture, 3 for Economy)","schema":{"type":"integer"},"index$":0},{"name":"format","in":"query","description":"Response format (json or xml)","schema":{"type":"string","enum":["json","xml"],"default":"json"},"index$":1},{"name":"page","in":"query","description":"Page number for pagination","schema":{"type":"integer","minimum":1,"default":1},"index$":2},{"name":"per_page","in":"query","description":"Number of results per page","schema":{"type":"integer","minimum":1,"maximum":32500,"default":50},"index$":3}],"securitySource":"unspecified"},"GET /topic":{"protocol":"http","operationId":"getTopics","responses":{"200":{"description":"Successful response with topic list","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","key$":"id"},"value":{"type":"string","key$":"value"},"sourceNote":{"type":"string","key$":"sourceNote"}},"index$":0}}}}}},"parameters":[{"name":"format","in":"query","description":"Response format (json or xml)","schema":{"type":"string","enum":["json","xml"],"default":"json"},"index$":0},{"name":"page","in":"query","description":"Page number for pagination","schema":{"type":"integer","minimum":1,"default":1},"index$":1},{"name":"per_page","in":"query","description":"Number of results per page","schema":{"type":"integer","minimum":1,"maximum":1000,"default":50},"index$":2}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let topic_ref01_data = Object.values(setup.data.existing.topic)[0] as any

    // LIST
    const topic_ref01_ent = client.Topic()
    const topic_ref01_match: any = {}

    const topic_ref01_list = (await topic_ref01_ent.list(topic_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/topic/TopicTestData.json')

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
    ['topic01','topic02','topic03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WORLD_BANK_DATA_TEST_TOPIC_ENTID': idmap,
    'WORLD_BANK_DATA_TEST_LIVE': 'FALSE',
    'WORLD_BANK_DATA_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WORLD_BANK_DATA_TEST_TOPIC_ENTID']

  const live = 'TRUE' === env.WORLD_BANK_DATA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WORLD_BANK_DATA_TEST_TOPIC_ENTID']
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
  
