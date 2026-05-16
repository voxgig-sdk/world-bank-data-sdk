# WorldBankData SDK feature factory

from feature.base_feature import WorldBankDataBaseFeature
from feature.test_feature import WorldBankDataTestFeature


def _make_feature(name):
    features = {
        "base": lambda: WorldBankDataBaseFeature(),
        "test": lambda: WorldBankDataTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
