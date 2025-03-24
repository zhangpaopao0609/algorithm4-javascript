/// <reference types="types" />
import { EventType, IBaseEvent } from './types';
export interface IMutationEvent extends IBaseEvent {
    seq: number;
    type: EventType.Mutation;
    mutations: IMutationRecord[];
    ts: number;
    env: UIEnv;
}
export interface IInitDOMEvent extends IBaseEvent {
    seq: number;
    type: EventType.InitDOM;
    slices: IInitDOMSlice[];
    ts: number;
    elapsed: number;
    env: UIEnv;
}
export interface IInitDOMSlice {
    ts: number;
    nodes: INodeInfo[];
}
export interface IMutationRecord {
    type: MutationType;
    target: number;
    addedNodes?: IAddedNodesSlice[];
    removedNodes?: number[];
    previousSibling?: number;
    nextSibling?: number;
    attributeName?: string;
    attributeValue?: string;
    attributeRemoved?: boolean;
    propertyName?: string;
    propertyValue?: any;
    propertyValueType?: ExparserCompPropType;
    characterData?: string;
    characterDataHash?: string;
    maskLength?: number;
    width?: number;
    height?: number;
    canvas?: ICanvasDetail;
}
export declare enum MutationType {
    ChildList = 1,
    Attributes = 2,
    CharacterData = 3,
    Properties = 4,
    Dimension = 5,
    Canvas = 6,
    Video = 7,
    StyleSheets = 8,
    ConstructedStyleSheets = 9
}
export declare enum VideoEventType {
    onVideoPlay = 0,
    onVideoPause = 1,
    onVideoSeekCompelete = 2,
    onVideoTimeUpdate = 3
}
export declare enum UIEnv {
    DOM = 1,
    Exparser = 2
}
export interface INodeInfo {
    id: number;
    type: number;
    updateTs?: number;
    ref?: WeakRef<IExparserNode>;
    domRef?: WeakRef<Node>;
    tag?: string;
    attributes?: Readonly<Record<string, string>>;
    value?: string;
    oldValue?: string;
    srcPath?: string;
    oldSrcPath?: string;
    valueHash?: string;
    parentId?: number;
    prevId?: number;
    is?: string;
    properties?: Readonly<Record<string, IPropertyValue>>;
    builtIn?: boolean;
    slot?: string;
    compOptions?: Readonly<Partial<IExparserComponentOptions>>;
    width?: number;
    height?: number;
    masked?: boolean;
    maskLength?: number;
    unmasked?: boolean;
    excluded?: boolean;
    excludedRoot?: boolean;
    tapHandlerName?: string;
}
export type IPatchNodeInfo = Pick<INodeInfo, 'id'> & Partial<INodeInfo> & {
    attributes?: Record<string, string | undefined>;
};
export interface IAddedNodesSlice {
    ts?: number;
    nodes: IPatchNodeInfo[];
}
export declare enum ExparserNodeType {
    Element = 1,
    Component = 2,
    NativeNode = 3,
    VirtualNode = 4,
    TextNode = 5,
    Unknown = 6
}
export declare enum ExparserCompPropType {
    String = 1,
    Number = 2,
    Boolean = 3,
    JSON = 4,
    Null = 5,
    Undefined = 6
}
export interface IPropertyValue {
    readonly type: ExparserCompPropType;
    readonly value: string | number | boolean | null | undefined;
}
export interface ICanvasDetail {
    frameBufferId: string;
    frameBuffer?: Uint8Array;
    encoding?: string;
}
