/// <reference types="types" />
import { IMutationRecord, INodeInfo, IPatchNodeInfo } from '@tel/types/vd';
/**
 * ! un-exclude after excluded is not supported ! this will makes things over complicated,
 * ! because we would have to:
 * ! 1. report back the changes of all the unexcluded nodes with respect to their original version
 * ! 2. ensure observer state
 *
 * "exclude" should spread to descendents on detection, otherwise it would incur performance penalty:
 * 1. process excluded node on mutation event
 * 2. check excluded for every node while encoding
 *
 * "mask" need not spread on detection, because:
 * 1. mask only applies to text and images
 * 2. can check mask status while encoding
 */
export declare function setFlags(node: IExparserNode, info: INodeInfo): void;
export declare function strip(info: IPatchNodeInfo): IPatchNodeInfo | null;
export declare function maskMutation(mutation: IMutationRecord): IMutationRecord;
export declare function excludeMutation(mutation: IMutationRecord): IMutationRecord;
export declare function shouldMask(id: number): boolean;
export declare function shouldExclude(id: number): ExcludeLevel;
export declare function shouldExcludeForCosless(node: IExparserNode): boolean;
export declare enum ExcludeLevel {
    None = 0,
    Data = 1,
    All = 2
}
export declare function randomIntFromInterval(n: number): number;
