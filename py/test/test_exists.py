# ProjectName SDK exists test

import pytest
from worldbankdata_sdk import WorldBankDataSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = WorldBankDataSDK.test(None, None)
        assert testsdk is not None
