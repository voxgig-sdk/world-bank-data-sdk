import { WorldBankDataEntityBase } from '../WorldBankDataEntityBase';
import type { WorldBankDataSDK } from '../WorldBankDataSDK';
import type { Control } from '../types';
import type { Topic, TopicListMatch } from '../WorldBankDataTypes';
declare class TopicEntity extends WorldBankDataEntityBase<Topic> {
    constructor(client: WorldBankDataSDK, entopts: any);
    make(this: TopicEntity): TopicEntity;
    list(this: any, reqmatch?: TopicListMatch, ctrl?: Control): Promise<TopicEntity[]>;
}
export { TopicEntity };
