/// <reference types="types" />
import { IInitDOMEvent, INodeInfo } from '@tel/types/types';
import { IPublicTask } from '@tel/orchestrate/taskqueue';
export declare function reset(): void;
export declare function updateTextLengthCounters(length: number, isAddition: boolean): void;
export declare function updateImageInforAmount(info: INodeInfo): void;
export declare function WithoutWhiteLength(text: string): number;
export declare function initInfomationAmount(initEvent: IInitDOMEvent): void;
export declare function removeNodesInfoAmountUpdater(root: IExparserNode): IPublicTask<any>;
export declare function encodeInfoAmount(): void;
