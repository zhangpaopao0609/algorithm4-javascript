export * from './skv-reader';
export declare function createHeader(): void;
export declare function createKV(key: string, value: Uint8Array): Uint8Array;
export declare function create(includeHeader: boolean, kvs: [string, Uint8Array][]): Uint8Array;
export declare function merge(...bufArrays: Uint8Array[]): Uint8Array;
