# WorldBankData SDK utility: make_context

from core.context import WorldBankDataContext


def make_context_util(ctxmap, basectx):
    return WorldBankDataContext(ctxmap, basectx)
