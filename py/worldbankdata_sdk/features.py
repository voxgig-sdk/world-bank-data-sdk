# WorldBankData SDK feature factory

from worldbankdata_sdk.feature.base_feature import WorldBankDataBaseFeature
from worldbankdata_sdk.feature.ratelimit_feature import WorldBankDataRatelimitFeature
from worldbankdata_sdk.feature.retry_feature import WorldBankDataRetryFeature
from worldbankdata_sdk.feature.test_feature import WorldBankDataTestFeature
from worldbankdata_sdk.feature.timeout_feature import WorldBankDataTimeoutFeature


_FEATURES = {
    "base": lambda: WorldBankDataBaseFeature(),
    "ratelimit": lambda: WorldBankDataRatelimitFeature(),
    "retry": lambda: WorldBankDataRetryFeature(),
    "test": lambda: WorldBankDataTestFeature(),
    "timeout": lambda: WorldBankDataTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
