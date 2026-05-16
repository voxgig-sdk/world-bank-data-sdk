
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { WorldBankDataSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await WorldBankDataSDK.test()
    equal(null !== testsdk, true)
  })

})
