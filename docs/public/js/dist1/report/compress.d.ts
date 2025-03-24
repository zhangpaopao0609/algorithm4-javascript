import { IPublicTask } from '@tel/orchestrate/taskqueue';
export declare function init(): void;
export declare function reset(): void;
export declare function initZstdDicts(options: IInitZstdDictsOptions): void;
export declare function compress(binary: Uint8Array | Record<string, Uint8Array>): IPublicTask<ICompressTaskResult>;
export declare function compressSync(binary: Uint8Array | Record<string, Uint8Array>): ICompressTaskResult;
export declare const COMPRESS_CHANNELS: Record<string, string>;
interface IInitZstdDictsOptions {
    dictId: string;
    dicts: Record<string, Uint8Array>;
}
export declare enum CompressStatus {
    Compressing = 0,
    Compressed = 1,
    Uploaded = 2
}
export interface ICompressTaskResult {
    spec?: string;
    compressed: Uint8Array;
    onUploadSuccess?: () => void;
}
export {};
