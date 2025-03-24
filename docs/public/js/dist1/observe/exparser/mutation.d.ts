/// <reference types="types" />
import { ExparserNodeType } from '@tel/types/vd';
export declare function start(): void;
export declare function reset(): void;
export declare function observeTree(node: IExparserNode, timing?: boolean): void;
export declare function observeNode(node: IExparserNode, type: ExparserNodeType, builtIn?: boolean): void;
