export interface ITask {
    id?: string;
    desc?: string;
    fn: (task: IPublicTask) => any;
    priority?: Priority;
}
export interface IPublicTask<T = any> {
    id: string;
    promise: Promise<ITaskEndInfo<T>>;
    shouldYield(): boolean;
    yield(): Promise<void>;
    call(taskId: string): Promise<ITaskEndInfo<T>>;
    done(result?: any): void;
}
export interface ITaskEndInfo<T = any> {
    result: T;
    totalTime: number;
    slices: number;
}
export declare enum TaskSignal {
    Yield = 0,
    Done = 1
}
export declare enum Priority {
    High = 0,
    Normal = 1
}
export declare function start(): void;
export declare function reset(): void;
export declare function schedule<T = any>(task: ITask): IPublicTask<T>;
