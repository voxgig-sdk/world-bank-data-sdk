import { WorldBankDataEntityBase } from '../WorldBankDataEntityBase';
import type { WorldBankDataSDK } from '../WorldBankDataSDK';
import type { Control } from '../types';
import type { Metadata, MetadataListMatch } from '../WorldBankDataTypes';
declare class MetadataEntity extends WorldBankDataEntityBase<Metadata> {
    constructor(client: WorldBankDataSDK, entopts: any);
    make(this: MetadataEntity): MetadataEntity;
    list(this: any, reqmatch?: MetadataListMatch, ctrl?: Control): Promise<MetadataEntity[]>;
}
export { MetadataEntity };
