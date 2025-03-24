import { IEvent } from 'protocol';
import { MemoDomain } from '@tel/types/types';
export declare const ReusableMemoDomains: Set<MemoDomain>;
export declare function start(): Promise<void>;
export declare function memo(item: IMemoItem): void;
export declare function reset(): void;
export declare function enumify(value: string, domain: MemoDomain): number;
export declare function enumifyReturnItem(value: string, domain: MemoDomain): {
    id: number;
    event?: undefined;
} | {
    id: number;
    event: {
        domain: MemoDomain;
        keyInt: number;
        value: string;
    };
};
export declare function saveBatchMemoEvent(event: IEvent): Promise<void>;
export declare function loadReusableMemo(): Promise<void>;
export declare function hasReusableMemoLoaded(): boolean;
export declare function ensureReusableMemoLoaded(): true | Promise<void>;
export declare function loadRemoteDict(list: string[]): void;
interface IMemoItem {
    domain?: number;
    key?: string;
    keyInt?: number;
    value: string;
}
export {};
