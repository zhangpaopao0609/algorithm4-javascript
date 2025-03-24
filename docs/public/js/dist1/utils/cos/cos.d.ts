export declare function postObject(options: IPutObjectOptions): Promise<{
    status: number;
    headers: Record<string, string>;
}>;
export declare function postObjectWithSendBeacon(options: IPutObjectOptions): void;
export declare function putObjectWithWxData(key: string, body: string | Uint8Array): Promise<unknown>;
export declare function getObject(options: IGetObjectOptions): Promise<{
    status: number;
    headers: Record<string, string>;
    body: ArrayBuffer;
}>;
export interface ICOSInfo {
    bucket: string;
    region: string;
    secretid: string;
    secretkey: string;
    token: string;
    prefix: string;
    expire_timestamp: number;
    zstd_dict_url?: string;
}
interface IPutObjectOptions {
    key: string;
    body: string | Uint8Array;
    headers?: Record<string, string>;
}
interface IGetObjectOptions {
    key: string;
}
export {};
