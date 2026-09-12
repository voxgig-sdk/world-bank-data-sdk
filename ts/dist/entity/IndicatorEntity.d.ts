import { WorldBankDataEntityBase } from '../WorldBankDataEntityBase';
import type { WorldBankDataSDK } from '../WorldBankDataSDK';
import type { Control } from '../types';
import type { Indicator, IndicatorLoadMatch, IndicatorListMatch } from '../WorldBankDataTypes';
declare class IndicatorEntity extends WorldBankDataEntityBase<Indicator> {
    constructor(client: WorldBankDataSDK, entopts: any);
    make(this: IndicatorEntity): IndicatorEntity;
    load(this: any, reqmatch?: IndicatorLoadMatch, ctrl?: Control): Promise<IndicatorEntity>;
    list(this: any, reqmatch?: IndicatorListMatch, ctrl?: Control): Promise<IndicatorEntity[]>;
}
export { IndicatorEntity };
