import { IPublicTask } from '@tel/orchestrate/taskqueue';
import { IStoredEvent } from '@tel/utils/storage';
export declare function scheduleEncode(events: IStoredEvent[]): IPublicTask<any>;
export declare function encodeForCosSync(allEvents: IStoredEvent[]): Uint8Array | Record<string, Uint8Array>;
