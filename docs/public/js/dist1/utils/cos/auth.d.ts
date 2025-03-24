/**
 * ref: https://cloud.tencent.com/document/product/436/7778
 */
export declare function sign(opt: ISignOptions): string;
export declare const signPost: (secretKey: string, bucket: string, secretId: string, key: string) => {
    signature: any;
    keyTime: string;
    policyBase64: string;
};
interface ISignOptions {
    secretKey: string;
    secretId: string;
    method: string;
    pathname: string;
    query: Record<string, string>;
    headers: Record<string, string>;
}
export {};
