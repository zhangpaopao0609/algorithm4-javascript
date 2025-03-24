export declare function start(): void;
export declare function setAttrs(newAttrs: undefined | Record<string, string>, forceSave?: boolean): void;
/**
 *
 * @param eventName 事件名 length <= 50
 * @param eventProperties 事件属性 length(k) <= 50 length(v)<=255 countDistinct(k)<=10
 */
export declare function event(eventName: string, eventProperties: Record<string, string | number>): boolean;
/**
 *
 * @param uid 不可更改 argMinIf(uid,timestampms_,wxobs_sdk_type="__userob_default_user_identifier__")
 * @param props 可以被updateUserProperties更改, argMinIf(key,timestampms_,wxobs_sdk_type in ("__userob_default_user_identifier__","__userob_default_update_user_prop__"))
 */
export declare function identify(uid: string, props: Record<string, string | number>): boolean;
export declare function updateUserProperties(props: Record<string, string | number>): boolean;
export declare function setCustomId(uid: string): boolean;
export declare function setCustomProperties(props: Record<string, string | number>): boolean;
