import { CountryEntity } from './entity/CountryEntity';
import { IndicatorEntity } from './entity/IndicatorEntity';
import { MetadataEntity } from './entity/MetadataEntity';
import { TopicEntity } from './entity/TopicEntity';
export type * from './WorldBankDataTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { WorldBankDataEntityBase } from './WorldBankDataEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class WorldBankDataSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Country(entopts?: Record<string, any>): CountryEntity;
    Indicator(entopts?: Record<string, any>): IndicatorEntity;
    Metadata(entopts?: Record<string, any>): MetadataEntity;
    Topic(entopts?: Record<string, any>): TopicEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): WorldBankDataSDK;
    tester(testopts?: any, sdkopts?: any): WorldBankDataSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof WorldBankDataSDK;
export { stdutil, config, BaseFeature, WorldBankDataEntityBase, WorldBankDataSDK, SDK, };
