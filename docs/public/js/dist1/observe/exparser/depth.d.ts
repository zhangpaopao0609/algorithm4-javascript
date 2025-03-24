export declare const info: IMaxDepthInfo;
export declare function start(): void;
export declare function reset(): void;
interface IMaxDepthInfo {
    documentHeight: number;
    maxScrollY: number;
    refreshed: boolean;
    windowHeight: number;
    scrollIntervals: Array<[number, number]>;
}
export {};
