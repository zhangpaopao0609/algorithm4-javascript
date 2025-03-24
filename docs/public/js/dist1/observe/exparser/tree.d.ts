/// <reference types="types" />
import { ExparserNodeType, INodeInfo } from '@tel/types/types';
import { IPublicTask } from '@tel/orchestrate/taskqueue';
export declare function reset(): void;
export declare function init(): Promise<void>;
export declare function addTree(root: IExparserNode, onNodeFound: (info: INodeInfo, slice: number) => void): IPublicTask<any>;
/**
 * * algo note: see ../dom/dom.ts
 * * SPECIAL NOTE: exparser observer dispatches event even if the node is not attached
 */
export declare function addNode(node: IExparserNode, { type, builtIn }?: IAddNodeOptions): INodeInfo | null;
export declare function updateNodePos(node: IExparserNode): void;
export declare function getNodeId(node: IExparserNode): number | undefined;
export declare function getNodeInfo(id: number): INodeInfo;
/**
 * depending on node type, we collect:
 *   shadowRoot -> composed parent
 *   other -> shadow parent
 */
export declare function getNodePos(node: IExparserNode, type: ExparserNodeType): {
    parentId: number | undefined;
    prevId: number | undefined;
};
interface IAddNodeOptions {
    type?: ExparserNodeType;
    builtIn?: boolean;
}
export {};
