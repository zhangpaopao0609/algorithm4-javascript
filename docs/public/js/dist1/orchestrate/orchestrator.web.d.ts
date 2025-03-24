/// <reference types="types" />
import { IEncryptInfo, IShouldCaptureNetworkRequest } from '@tel/utils/config';
export interface IOrchestratorOptions {
    uuid: string;
    projectId: string;
    sdkVersion: string;
    unloadedWebviewIds: string[];
    hashText?: boolean;
    isWhitelistMaskMode?: boolean;
    exposureSelectorList?: string[];
    onAppEnterForeground: (fn: (res: any) => void) => void;
    onAppEnterBackground: (fn: () => void) => void;
    reportUrl: string;
    reporter: number;
    encrypt?: IEncryptInfo;
    canvas?: boolean;
    console?: boolean | Record<string, boolean>;
    network?: boolean | IShouldCaptureNetworkRequest;
    attrs?: Record<string, string>;
    sync?: boolean;
    cloudServiceProvider: number;
    pluginList?: string[];
    reportInterval?: number;
    iframe: boolean;
    onReport: SdkParam['onReport'];
    errorCallback: SdkParam['errorCallback'];
    experimental?: {
        xhr?: boolean;
    };
    __qualityReportIntervalSync__?: boolean;
}
export declare function start(opt: IOrchestratorOptions): Promise<void>;
export declare function reset(): Promise<void>;
