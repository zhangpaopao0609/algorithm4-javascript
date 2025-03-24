import { IPublicTask } from '@tel/orchestrate/taskqueue';
export declare function start(): void;
export declare function reset(): void;
export declare function observeTree(root: Node): void;
export declare function observeTreeAfterLoad(root: Node): void;
export declare function scan(mutations: MutationRecord[]): void;
export declare function processMutationEvents(task: IPublicTask): Promise<void>;
