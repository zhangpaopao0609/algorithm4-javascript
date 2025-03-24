/// <reference types="types" />
import { INodeInfo as IProtocolNodeInfo } from 'protocol';
import { TaskSignal } from '@tel/orchestrate/taskqueue';
import { ExparserCompPropType, ExparserNodeType, INodeInfo, IPatchNodeInfo, IPropertyValue } from '@tel/types/vd';
export declare function isElement(node: IExparserNode): node is IExparserElement;
export declare function isComponent(node: IExparserNode): node is IExparserComponent;
export declare function isBuiltInComponent(node: IExparserComponent): boolean;
export declare function isWxInput(node: IExparserComponent): boolean;
export declare function isNativeNode(node: IExparserNode): node is IExparserNativeNode;
export declare function isVirtualNode(node: IExparserNode): node is IExparserVirtualNode;
export declare function isShadowRoot(node: IExparserNode): node is IExparserShadowRoot;
export declare function isTextNode(node: IExparserNode): node is IExparserTextNode;
export declare function getType(node: IExparserNode): ExparserNodeType;
/**
 * only work for built-in components
 */
export declare function getProperties(comp: IExparserComponent): Record<string, IPropertyValue>;
/**
 * exparser tree traversal algo:
 *   order: dfs (don't use bfs, because dfs can ensure scanning first visible screen first)
 *   switch node:
 *     Built-in Component, NativeNode, TextNode =>
 *       collect tag, attrs, props, value, parentId, prevId
 *       return newNodes = slot children (node.childNodes)
 *     Other Component =>
 *       collect tag, attrs, parentId, prevId
 *       return newNodes = Set{composed-tree children (node.__wxSlotChildren), slot children (node.childNodes)}
 *     VirtualNode:slot =>
 *       collect vtag, is, slotName, parentId, prevId
 *       return newNodes = null
 *     VirtualNode:ShadowRoot =>
 *       collect vtag, is, parentId, prevId
 *       return newNodes = composed-tree children (node.__wxSlotChildren)
 *     VirtualNode:other (wx:if, wx:for, ...) =>
 *       collect vtag, is, parentId, prevId
 *       return newNodes = slot children (node.childNodes)
 */
export declare function traverse(queue: IExparserNode[], quota: number, onNodeFound: (param: ITraverseOnNodeFoundParam) => boolean): TaskSignal;
export declare function traverseComposedParents(node: IExparserNode, callback: (el: IExparserElement) => boolean): void;
export declare function toProtocolNodeInfo(info: IPatchNodeInfo | INodeInfo): IProtocolNodeInfo | null;
export declare const TYPEOF_TO_EXPARSER_COMP_PROP_TYPE: {
    string: ExparserCompPropType;
    object: ExparserCompPropType;
    number: ExparserCompPropType;
    boolean: ExparserCompPropType;
    undefined: ExparserCompPropType;
};
interface ITraverseOnNodeFoundParam {
    node: IExparserNode;
    type: ExparserNodeType;
    builtIn?: boolean;
}
export {};
