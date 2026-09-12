import { WorldBankDataEntityBase } from '../WorldBankDataEntityBase';
import type { WorldBankDataSDK } from '../WorldBankDataSDK';
import type { Control } from '../types';
import type { Country, CountryLoadMatch, CountryListMatch } from '../WorldBankDataTypes';
declare class CountryEntity extends WorldBankDataEntityBase<Country> {
    constructor(client: WorldBankDataSDK, entopts: any);
    make(this: CountryEntity): CountryEntity;
    load(this: any, reqmatch?: CountryLoadMatch, ctrl?: Control): Promise<CountryEntity>;
    list(this: any, reqmatch?: CountryListMatch, ctrl?: Control): Promise<CountryEntity[]>;
}
export { CountryEntity };
