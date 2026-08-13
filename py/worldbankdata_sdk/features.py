# WorldBankData SDK feature factory

from worldbankdata_sdk.feature.base_feature import WorldBankDataBaseFeature
from worldbankdata_sdk.feature.test_feature import WorldBankDataTestFeature


def _make_feature(name):
    features = {
        "base": lambda: WorldBankDataBaseFeature(),
        "test": lambda: WorldBankDataTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
