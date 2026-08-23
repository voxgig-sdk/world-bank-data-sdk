# WorldBankData SDK feature factory

from worldbankdata_sdk.feature.base_feature import WorldBankDataBaseFeature
from worldbankdata_sdk.feature.test_feature import WorldBankDataTestFeature


_FEATURES = {
    "base": lambda: WorldBankDataBaseFeature(),
    "test": lambda: WorldBankDataTestFeature(),
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
