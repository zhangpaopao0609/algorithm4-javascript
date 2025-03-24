export declare function init(): void;
export declare function reset(): Promise<void>;
interface IReportOptions {
    skipNext?: boolean;
    sendBeacon?: boolean;
    backstop?: boolean;
}
export declare function reportStorage(opt?: IReportOptions): Promise<void>;
export {};
