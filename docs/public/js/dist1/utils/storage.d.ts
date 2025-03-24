import { IEvent } from 'protocol';
import { ICOSInfo } from './cos/cos';
export declare const DATABASE_NAME_PREFIX = "TEL";
export declare const EVENT_OBJECT_STORAGE_NAME = "EVENT";
export declare const META_OBJECT_STORAGE_NAME = "META";
export declare const ASSET_OBJECT_STORAGE_NAME = "ASSET";
export declare const MEMO_OBJECT_STORAGE_NAME = "MEMO";
export interface IStoredEvent {
    id?: number;
    events: IEvent[];
    index: string;
    path: string;
    query: Record<string, string>;
    webviewId: number;
    weSessionId: string;
    sessionLifeTimeMeta: {
        weSessionId: string;
        wesessionScene: number;
        wesessionSceneNote: string;
        isWesessionEntrance: number;
        openSource: number;
    };
    uuid: string;
    ts: number;
}
export interface IStoredAppservicePacked {
    id?: number;
    ack: number;
    data: ArrayBuffer;
    uuid: string;
    packedUuid: string;
    metadata: {
        compressed: boolean;
        encrypted: boolean;
    };
    ts: number;
}
export interface IReportMeta {
    type: 'webview';
    uuid: string;
    seqs: Record<number, number>;
}
export interface IDictMeta {
    type: 'dict';
    key: string;
    dicts: Record<string, any>;
}
export interface ICommonAsset {
    name: string;
    type: string;
    value: string | Uint8Array;
    status: CommonAssetStatus;
}
export declare enum CommonAssetStatus {
    Unknown = "0",
    Uploaded = "1"
}
export declare class EventStorage {
    db: IDBDatabase | null;
    pendingEvents: IEvent[];
    pendingAppservicePacked: Array<{
        data: ArrayBuffer;
        metadata: {
            compressed: boolean;
            encrypted: boolean;
        };
        ack: number;
    }>;
    uuid: string;
    webviewId: number;
    path: string;
    sdkVersion: string;
    constructor(uuid: string, webviewId: number, path: string, sdkVersion: string);
    saveEvents: (events: IEvent[]) => void;
    savePackedAppserviceData: (data: {
        data: ArrayBuffer;
        metadata: {
            compressed: boolean;
            encrypted: boolean;
        };
        ack: number;
    }[]) => Promise<void>;
    getAllEvents: () => Promise<IStoredEvent[]>;
    getCurrentSessionPackedAppserviceData: () => Promise<IStoredAppservicePacked[]>;
    removePackedAppserviceDataByPackedUuids: (ids: number[]) => Promise<void>;
    clearEventsUntil: (id: number) => Promise<undefined>;
    getWebviewReportMeta(): Promise<any>;
    updateWebviewReportMeta(meta: IReportMeta): Promise<IDBValidKey>;
    getDictMeta(): Promise<IDictMeta | undefined>;
    updateDictMeta(meta: IDictMeta): Promise<IDBValidKey>;
    existsCommonAsset(name: string): Promise<boolean>;
    saveCommonAsset(asset: ICommonAsset, check?: boolean): Promise<void>;
    getCommonAssetsByStatus(status: CommonAssetStatus): Promise<ICommonAsset[]>;
    clearCommonAssets(): Promise<undefined>;
    saveSessionReusableMemo(events: IEvent[]): Promise<IDBValidKey>;
    getCurrentSessionReusableMemos(): Promise<IStoredEvent[]>;
    dbInited: () => Promise<unknown>;
    private pruneEvents;
    objectStore(name: string): IDBObjectStore;
    $<T>(request: IDBRequest<T>): Promise<T>;
}
export declare function getStorage(uuid: string): EventStorage;
export declare function clearStorage(): void;
export declare function popMemoryEvents(): IStoredEvent[];
export declare function handleCosInfoChange(cosInfo?: ICOSInfo): void;
