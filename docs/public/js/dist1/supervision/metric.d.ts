import { MetricType } from '@tel/types/metric';
export declare function init(): void;
export declare function count(metric: MetricType): void;
export declare function log(metric: MetricType, extra: string): void;
export declare function sum(metric: MetricType, value: number): void;
export declare function addDataPoint(metric: MetricType, value: number): void;
export declare function report(): void;
