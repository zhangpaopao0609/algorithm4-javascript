import { IPublicTask } from '@tel/orchestrate/taskqueue';
import { IStoredAppservicePacked, IStoredEvent } from '@tel/utils/storage';
export declare function uploadToCos(data: Uint8Array, appserviceDataList: IStoredAppservicePacked[], ops: {
    encrypted: boolean;
    useWxData?: boolean;
    compressSpec?: string;
}): Promise<void>;
export declare function uploadToCosWithSendBeacon(data: Uint8Array, ops: {
    encrypted: boolean;
    compressSpec?: string;
}): void;
export declare function uploadCommonAsset(data: string | Uint8Array, name: string, type: string): Promise<void>;
export declare function _uploadCommonAssets(task: IPublicTask): Promise<void>;
export declare function uploadExtracted(events: IStoredEvent[]): IPublicTask<any>;
export declare function getPackedExtracted(events: IStoredEvent[]): IPublicTask<any>;
export declare function _getPackedExtracted(allEvents: IStoredEvent[], task: IPublicTask): Promise<{
    data: Uint8Array;
    encrypted: boolean;
}[]>;
export declare function uploadToWx(data: Uint8Array, ops: {
    encrypted: boolean;
}): Promise<void>;
export declare function reportUnsupported(uuid: string, projectId: string, sdkVersion: string): Promise<void>;
export declare function preprocessCommonAssets(str: string): string;
export declare function report(): Promise<void>;
export declare function arrayBufferToBase64(buffer: ArrayBuffer): string;
export type PromiseType<T> = T extends Promise<infer R> ? R : T;
export interface IPackedWebviewData {
    cos: {
        data: ArrayBuffer;
        metadata: {
            encrypted: boolean;
            compressSpec: string | undefined;
        };
    };
    extracted: PromiseType<ReturnType<typeof _getPackedExtracted>>;
    timestamp: number;
}
