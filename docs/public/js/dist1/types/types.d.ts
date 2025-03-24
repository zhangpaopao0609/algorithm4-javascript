export * from './vd';
export * from './enums/css';
export declare enum EventType {
    TouchStart = 1,
    TouchMove = 2,
    TouchEnd = 3,
    TouchCancel = 4,
    MouseDown = 5,
    MouseMove = 6,
    MouseUp = 7,
    Tap = 8,
    LongTap = 9,
    Click = 10,
    DoubleClick = 11,
    ContextMenu = 12,
    Scroll = 13,
    Selection = 14,
    Resize = 15,
    WxInput = 16,
    VisibilityChange = 17,
    Routing = 18,
    InputChange = 19,
    InitDOM = 20,
    Mutation = 21,
    AppserviceCanvas = 22,
    DevCodeInfo = 23,
    ComponentEvent = 24,
    Perf = 30,
    Error = 31,
    Log = 32,
    Env = 40,
    WindowState = 41,
    Config = 42,
    CusttomAttr = 43,
    Memo = 44,
    StayTime = 50,
    Copy = 80,
    Paste = 81,
    Cut = 82,
    Depth = 83,
    EleExposure = 84,
    EleUnExposure = 85,
    CommonDeps = 86,
    CustomEvent = 88,
    UiReaction = 89,
    PrivateConfig = 90,
    NetworkAPI = 110,
    ConsoleError = 111,
    ConsoleWarn = 112,
    RTLogError = 113,
    RTLogWarn = 114,
    PerfAPI = 115,
    NetworkWeak = 116,
    NetworkStatus = 117,
    FirstExposure = 118,
    WebNetwork = 119,
    InformationAmount = 122,
    SimpleRepetitiveEvent = 130,
    ConsecutiveRepetitiveEvent = 131
}
export declare enum ReportEnvType {
    Appservice = 1,
    Webview = 2
}
export declare enum MemoDomain {
    Is = 1,
    Tag = 2,
    Classname = 3,
    NodeAttrKey = 4,
    NodeAttrValue = 5,
    CSSProperty = 6,
    CSSPropertyValue = 7,
    CompProperty = 8,
    NodeValue = 9,
    CompPropertyValue = 10,
    ExpNodeValue = 11,
    TapHandlerName = 12
}
export interface IBaseEvent {
    seq?: number;
    type: EventType;
}
export declare enum RouteType {
    Init = 0,
    PushState = 1,
    ReplaceState = 2,
    PopState = 3
}
export declare enum IWxInputType {
    Change = 0,
    Focus = 1,
    Blur = 2
}
export declare enum WxComponentEventNumType {
    load = 1,
    error = 2
}
export interface IEnvEvent extends IBaseEvent {
    userAgent?: string;
    os?: string;
    osVersion?: string;
    deviceVendor?: string;
    deviceType?: string;
    deviceModel?: string;
    browser?: string;
    identifier?: string;
}
export interface IWindowStateEvent extends IBaseEvent {
    viewWidth?: number;
    viewHeight?: number;
    docWidth?: number;
    docHeight?: number;
    url?: string;
    title?: string;
    safeAreaInsetTop?: string;
    safeAreaInsetBottom?: string;
    safeAreaInsetLeft?: string;
    safeAreaInsetRight?: string;
}
export interface IConfigEvent extends IBaseEvent {
    isWhitelistMaskMode?: boolean;
    dict?: string;
}
