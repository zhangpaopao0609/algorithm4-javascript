import { IPatchNodeInfo } from '@tel/types/vd';
import { IEvent, INodeInfo as IProtocolNodeInfo } from 'protocol';
export declare function optimizeStorageForDOMNodesSlice(nodes: IPatchNodeInfo[], extraEvents: IEvent[]): IProtocolNodeInfo[];
export declare function tokenizeCssText(cssText: string, memoEvent: IEvent): {
    optimizable: boolean;
    tokens: number[];
};
