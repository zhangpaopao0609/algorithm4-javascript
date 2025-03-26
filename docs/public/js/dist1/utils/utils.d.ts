/// <reference types="types" />
export declare function safeRunSync<T extends (...args: any[]) => any>(fn: T): [number, ReturnType<T>];
export declare function stringToUtf8Array(str: string): Uint8Array;
/**
 * THIS ONE SUPPORTS EMOJI !
 */
export declare const utf8ArrayToStr: (array: Uint8Array) => string;
export declare function djbHash(input: string): string;
export declare function djbHashUint8Array(input: Uint8Array): string;
export declare function getBase64Image(img: HTMLImageElement): Promise<string>;
export declare function getBase64WxImage(node: IExparserComponent): Promise<string>;
export declare function shouldHashText(input: string, threshold?: number): boolean;
export declare function shouldDropAttrValue(key: string, value: string): boolean;
export declare function genPrefix(): string;
export declare function convertKeysToCamelCase(obj: any): any;
export declare function uuidv4(): string;
export declare function getCurrentUrl(): [string, string];
export declare function compareLibVersion(_v1: string, _v2: string): 0 | 1 | -1;
export declare function filter<T>(arr: T[], cb: (item: T) => boolean): T[];
export declare function filterEmptys<T>(arr: T[]): (T & {})[];
export declare function isWasmSupported(): boolean;
export declare function isDev(): boolean;
export declare function isInMiniprogram(): boolean;
