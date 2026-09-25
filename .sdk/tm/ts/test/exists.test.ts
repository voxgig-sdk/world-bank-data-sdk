
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { WorldBankDataSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = WorldBankDataSDK.test()
    equal(testsdk instanceof WorldBankDataSDK, true,
      'WorldBankDataSDK.test() must return a client synchronously')
  })

})
