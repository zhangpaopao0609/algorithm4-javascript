/// <reference types="types" />
export declare const WXOBS_SESSION_DATA_KEY = "WXOBS_SSS";
export declare const TIME_GAP_THRESHOLD: number;
interface IParam {
    projectKey: string;
    multiTab: boolean;
    setupParam: SdkParam;
    hostSessionId: string | null;
}
export declare function getSessionInfo(param: IParam): Promise<false | ISessionInfo>;
export declare function getHostSessionId(): string | null;
export declare function getWxobMetadata(param: SdkParam): Promise<IObMetadata>;
export declare function getAuxiliaryDomainInfo(): string;
export declare function getLocalMetadata(projectKey: string): ILocalMetadata | null;
export declare function setLocalMetadata(projectKey: string, data: ILocalMetadata): void;
interface ISessionInfo {
    webviewId: number;
    prefix: string;
    uuid: string;
    reporter: number;
    projectKey: string;
}
export interface ILocalMetadata {
    webviewIds: number[];
    prefix: string;
    uuid: string;
    reporter: number;
    activeTimestamp: number;
    webviewCount: number;
    sdkVersion: string;
    secondaryDomainWebviewId: number;
}
export {};
