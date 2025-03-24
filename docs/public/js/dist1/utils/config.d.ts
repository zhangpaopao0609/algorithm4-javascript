import { IOrchestratorOptions } from '@tel/orchestrate/orchestrator';
import type { IOrchestratorOptions as IWebOrchestratorOptions } from '@tel/orchestrate/orchestrator.web';
import { ICOSInfo } from './cos/cos';
import { IStoredEvent } from './storage';
declare const config: IConfig;
export interface IFeatureConfig {
    name: string;
    scope?: string;
    proportion?: number;
}
export declare function setConfig(data: Partial<IOrchestratorOptions & IWebOrchestratorOptions>): void;
export declare function resetConfig(): void;
export declare function parseFeatureScope(value: string, ctx: {
    os: string;
    sdkVersion: string;
}): boolean;
export default config;
export interface IConfig {
    reporter: number;
    uuid: string;
    projectId: string;
    sdkVersion: string;
    unloadedWebviewIds: string[];
    hashText?: boolean;
    isWhitelistMaskMode?: boolean;
    exposureSelectorList?: string[];
    reportUrl: string;
    maskClass: string;
    unmaskClass: string;
    excludeClass: string;
    collectFileClass: string;
    dataAttrs: boolean;
    canvas?: boolean;
    console?: boolean | Record<string, boolean>;
    network?: boolean | IShouldCaptureNetworkRequest;
    cosInfo?: ICOSInfo;
    encrypt?: IEncryptInfo;
    sync?: boolean;
    attrs?: Record<string, string>;
    onAppEnterBackground: (cb: any) => void;
    cloudServiceProvider: number;
    pluginList?: string[];
    enabledFeatures: Record<string, boolean>;
    reportInterval: number;
    isWeb: boolean;
    serverClientTimeDiff: number;
    iframe: boolean;
    rawMetaData?: IWxObMetaData;
    onReport: IWebOrchestratorOptions['onReport'];
    errorCallback: IWebOrchestratorOptions['errorCallback'];
    coslessMode?: boolean;
    hashUid?: string | null;
    __qualityReportIntervalSync__?: boolean;
    weSessionId: string | null;
    appVersion: string;
    staticMeta: {
        openId: string;
        enterScene: number;
        languageVersion: string;
        clientVersion: number;
        addState: number;
        envVersion: number;
        appversion: string;
        devicemodel: string;
        devicebrand: string;
        osName: string;
        osVersion: string;
    };
    wesessionMeta: IStoredEvent['sessionLifeTimeMeta'];
    networkStatus: string;
    customHost?: string;
    query?: Record<string, string>;
    textLenGranularity: number;
    experimental?: {
        xhr?: boolean;
    };
}
export interface INetworkRequestInfo {
    success: boolean;
    url: string;
    method: string;
    status: number;
    reqBody?: string;
    resBody?: string;
    cost: number;
}
export type IShouldCaptureNetworkRequest = (req: INetworkRequestInfo) => boolean | INetworkRequestInfo;
export interface IEncryptInfo {
    key: string;
    iv: string;
    algo: string;
    version: number;
}
interface IWxObMetaData {
    wxob_mode: number;
    is_whitelist_mask_mode: boolean;
    proportion: number;
    url?: string;
    cloud_service_provider?: number;
    encrypt?: any;
    min_available_sdk_version?: string;
    sdk_version_black_list?: string[];
    exposure_selector_list?: string[];
    plugin_list?: string[];
    feature_config?: {
        name: string;
        scope?: string;
        proportion?: number;
    }[];
    collection_interval?: number;
    dict?: string;
}
