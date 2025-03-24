import { IPublicTask } from '@tel/orchestrate/taskqueue';
export declare function encrypt(binary: Uint8Array): IPublicTask<any>;
export declare function encryptSync(binary: Uint8Array): Uint8Array;
