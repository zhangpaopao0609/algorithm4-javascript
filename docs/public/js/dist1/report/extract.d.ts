import { extractedEvent } from 'protocol/proto/json-payload';
import { IEvent } from 'protocol';
export declare function extractEvents(events: IEvent[], startSeq: number): [extractedEvent[], number];
