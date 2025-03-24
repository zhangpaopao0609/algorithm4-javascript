export declare function start(): void;
export declare function elapsed(ts?: number): number;
export declare function reset(): void;
export declare function startTiming(): {
    end(): number;
};
export declare function timeFn<T>(fn: (...args: any[]) => T, ...args: any[]): [T, number];
export declare function timeAsyncFn<T>(fn: (...args: any[]) => Promise<T>, ...args: any[]): Promise<[T, number]>;
export declare const getBaseTime: () => number;
export declare const getNow: () => number;
