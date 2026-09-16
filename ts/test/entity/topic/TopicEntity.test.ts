

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"sourceNote","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"value","req":false,"type":"`$STRING`","index$":2}],"id":{"field":"id","name":"id"},"name":"topic","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"topic_id","reqd":true,"type":"`$INTEGER`"}],"query":[{"active":true,"example":"json","kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`"},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`"},{"active":true,"example":50,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`"}]},"contract":{"id":"GET /topic/{topicId}/indicator","json":"{\"operationId\":\"getIndicatorsByTopic\",\"parameters\":[{\"description\":\"Topic ID (e.g., 1 for Agriculture, 3 for Economy)\",\"in\":\"path\",\"name\":\"topicId\",\"required\":true,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Response format (json or xml)\",\"in\":\"query\",\"name\":\"format\",\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"xml\"],\"type\":\"string\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results per page\",\"in\":\"query\",\"name\":\"per_page\",\"schema\":{\"default\":50,\"maximum\":32500,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with indicators for the topic\"},\"404\":{\"description\":\"Topic not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/topic/{topicId}/indicator","rename":{"param":{"topicId":"id"}},"segments":[{"lit":"topic"},{"var":"id"},{"lit":"indicator"}],"select":{"$action":"indicator","exist":["format","id","page","per_page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"example":"json","kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":50,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /topic","json":"{\"operationId\":\"getTopics\",\"parameters\":[{\"description\":\"Response format (json or xml)\",\"in\":\"query\",\"name\":\"format\",\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"xml\"],\"type\":\"string\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results per page\",\"in\":\"query\",\"name\":\"per_page\",\"schema\":{\"default\":50,\"maximum\":1000,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"id\":{\"type\":\"string\"},\"sourceNote\":{\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with topic list\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/topic","segments":[{"lit":"topic"}],"select":{"exist":["format","page","per_page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"topic","name__orig":"topic","Name":"Topic","name_":"topic","name-":"topic","NAME":"TOPIC","index$":3}, {"active":true,"entity":"topic","key$":"BasicTopicFlow","kind":"basic","name":"BasicTopicFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"topic_ref01"}}],"index$":0}]}, 'Topic')
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
  
