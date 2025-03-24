import { IPublicTask } from '@tel/orchestrate/taskqueue';
export declare function start(): void;
export declare function reset(): void;
export declare function scan(mutations: MutationRecord[]): void;
export declare function processMutationEvents(task: IPublicTask): Promise<void>;
