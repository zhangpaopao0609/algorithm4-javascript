import { IMutationRecord, IPatchNodeInfo } from '@tel/types/vd';
import { Event as ProtocolEvent } from 'protocol';
export declare function strip(info: IPatchNodeInfo): IPatchNodeInfo | null;
export declare function maskInputChange(id: number, input: ProtocolEvent.IInput): void;
export declare function shouldMask(id: number): boolean;
export declare function maskMutation(mutation: IMutationRecord): IMutationRecord;
export declare function excludeMutation(mutation: IMutationRecord): IMutationRecord;
export declare function shouldExclude(id: number): ExcludeLevel;
export declare enum ExcludeLevel {
    None = 0,
    Data = 1,
    All = 2
}
export declare function randomIntFromInterval(n: number): number;
