export declare function handleError({ type, e, sdkVersion, uuid, extra }: ErrorProps): void;
export declare function getHostSessionId(): string | null;
interface ErrorProps {
    type: number;
    e: Error;
    sdkVersion?: string;
    uuid?: string;
    extra?: string;
}
export {};
