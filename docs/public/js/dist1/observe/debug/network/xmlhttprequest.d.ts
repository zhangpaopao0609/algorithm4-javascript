export interface IRequestDetails {
    method: string;
    url: string;
    headers: Record<string, string>;
    body?: string;
    ts: number;
}
export interface IResponseDetails {
    error?: string;
    status?: number;
    headers: Record<string, string>;
    body?: string;
    ts: number;
}
export declare const subscribeXHRDone: (cb: (request: IRequestDetails, response: IResponseDetails) => void) => void;
export declare const unsubscribeXHRDone: (cb: (request: IRequestDetails, response: IResponseDetails) => void) => void;
export declare const start: () => void;
export declare const reset: () => void;
