import { EventType } from '@tel/types';
export declare class RepetitivePatternDetector {
    private pointerDecay;
    private timeDecay;
    private onReport;
    private _ws;
    private _cs;
    private _t;
    private _wh;
    private _dw;
    private _pw;
    private _rp;
    constructor(contextSize?: number, windowSize?: number, threshold?: number, pointerDecay?: number, timeDecay?: number, onReport?: (event: number[], ev: EventType) => void);
    normalize(data: number[]): number;
    hash(data: number[]): number;
    private lastTs;
    pushEnd(event: number[]): void;
    registerEventHandler(eventHandler: (event: number[]) => void): void;
    private _consequenceDetection;
    private _lastReported;
    private _simpleDetection;
    pushEvent(event: number[]): void;
    clear(): void;
}
