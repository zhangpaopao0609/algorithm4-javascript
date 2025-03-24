/// <reference types="types" />
declare const SCRIPT_URLs: string[];
declare const param: SdkParam;
declare function loadScript(url: string): Promise<unknown>;
declare function report(type: number, value: number, data?: any): void;
declare function main(): Promise<void>;
