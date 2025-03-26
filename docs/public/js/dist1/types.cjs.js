'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

exports.ErrorType = void 0;
(function (ErrorType) {
    ErrorType[ErrorType["Setup"] = 1] = "Setup";
    ErrorType[ErrorType["AppserviceStart"] = 2] = "AppserviceStart";
    ErrorType[ErrorType["WebviewStart"] = 3] = "WebviewStart";
    ErrorType[ErrorType["AppserviceCollect"] = 4] = "AppserviceCollect";
    ErrorType[ErrorType["WebviewCollect"] = 5] = "WebviewCollect";
    ErrorType[ErrorType["AppserviceEncode"] = 6] = "AppserviceEncode";
    ErrorType[ErrorType["WebviewEncode"] = 7] = "WebviewEncode";
    ErrorType[ErrorType["AppserviceReport"] = 8] = "AppserviceReport";
    ErrorType[ErrorType["WebviewReportCos"] = 9] = "WebviewReportCos";
    ErrorType[ErrorType["WebviewClean"] = 10] = "WebviewClean";
    ErrorType[ErrorType["WebviewReportWx"] = 11] = "WebviewReportWx";
    ErrorType[ErrorType["WebviewReport"] = 12] = "WebviewReport";
    ErrorType[ErrorType["AppserviceReportCos"] = 13] = "AppserviceReportCos";
    ErrorType[ErrorType["AppserviceReportWx"] = 14] = "AppserviceReportWx";
    ErrorType[ErrorType["CommonUploadError"] = 15] = "CommonUploadError";
    ErrorType[ErrorType["AppserviceTeardown"] = 16] = "AppserviceTeardown";
    ErrorType[ErrorType["TeardownApi"] = 17] = "TeardownApi";
    ErrorType[ErrorType["WebviewTeardown"] = 18] = "WebviewTeardown";
    ErrorType[ErrorType["Resetup"] = 19] = "Resetup";
    ErrorType[ErrorType["CollectWxImage"] = 20] = "CollectWxImage";
    ErrorType[ErrorType["CollectImage"] = 21] = "CollectImage";
    ErrorType[ErrorType["RefreshCos"] = 22] = "RefreshCos";
    ErrorType[ErrorType["PruneEvents"] = 23] = "PruneEvents";
    ErrorType[ErrorType["CosFetch"] = 24] = "CosFetch";
    ErrorType[ErrorType["GetAuxiliaryDomainInfo"] = 25] = "GetAuxiliaryDomainInfo";
    ErrorType[ErrorType["AppserviceReportCosWithWxData"] = 26] = "AppserviceReportCosWithWxData";
    ErrorType[ErrorType["WebviewReportCosWithWxData"] = 27] = "WebviewReportCosWithWxData";
    ErrorType[ErrorType["ObjectStoreError"] = 28] = "ObjectStoreError";
    ErrorType[ErrorType["FetchCosByWxDataError"] = 29] = "FetchCosByWxDataError";
    ErrorType[ErrorType["InvalidCustomDomain"] = 30] = "InvalidCustomDomain";
    ErrorType[ErrorType["CompressError"] = 31] = "CompressError";
    ErrorType[ErrorType["SaveEventError"] = 32] = "SaveEventError";
    ErrorType[ErrorType["SaveIndividualEventError"] = 33] = "SaveIndividualEventError";
    ErrorType[ErrorType["Debug"] = 1000] = "Debug";
})(exports.ErrorType || (exports.ErrorType = {}));

exports.MetricType = void 0;
(function (MetricType) {
    MetricType[MetricType["LayoutCost"] = 1] = "LayoutCost";
    MetricType[MetricType["EncryptCost"] = 2] = "EncryptCost";
    MetricType[MetricType["CompressCost"] = 3] = "CompressCost";
    MetricType[MetricType["UploadCosCost"] = 4] = "UploadCosCost";
    MetricType[MetricType["UploadWxCost"] = 5] = "UploadWxCost";
    MetricType[MetricType["TaskCost"] = 6] = "TaskCost";
    MetricType[MetricType["LongTaskCost"] = 7] = "LongTaskCost";
    MetricType[MetricType["WebCodeLoadCost"] = 8] = "WebCodeLoadCost";
    MetricType[MetricType["WebSetupCost"] = 9] = "WebSetupCost";
    MetricType[MetricType["FetchCosCost"] = 10] = "FetchCosCost";
    MetricType[MetricType["CompressV1Cost"] = 11] = "CompressV1Cost";
    MetricType[MetricType["CompressV2Cost"] = 12] = "CompressV2Cost";
    MetricType[MetricType["UploadCosCostWithWxData"] = 13] = "UploadCosCostWithWxData";
    MetricType[MetricType["UploadConsoleErrorTimeCost"] = 14] = "UploadConsoleErrorTimeCost";
    MetricType[MetricType["UploadRealtimeLogTimeCost"] = 15] = "UploadRealtimeLogTimeCost";
    MetricType[MetricType["WebviewEvent"] = 30] = "WebviewEvent";
    MetricType[MetricType["AppserviceEvent"] = 31] = "AppserviceEvent";
    MetricType[MetricType["Error"] = 32] = "Error";
    MetricType[MetricType["Unsupport"] = 33] = "Unsupport";
    MetricType[MetricType["Task"] = 34] = "Task";
    MetricType[MetricType["LongTask"] = 35] = "LongTask";
    MetricType[MetricType["CosInfoFetch"] = 37] = "CosInfoFetch";
    MetricType[MetricType["CosInfoRefetch"] = 38] = "CosInfoRefetch";
    MetricType[MetricType["UploadCosSucess"] = 39] = "UploadCosSucess";
    MetricType[MetricType["UploadCosFailure"] = 40] = "UploadCosFailure";
    MetricType[MetricType["UploadWxSucess"] = 41] = "UploadWxSucess";
    MetricType[MetricType["UploadWxFailure"] = 42] = "UploadWxFailure";
    MetricType[MetricType["AutoSetup"] = 43] = "AutoSetup";
    MetricType[MetricType["SdkSetup"] = 44] = "SdkSetup";
    MetricType[MetricType["MissSample"] = 45] = "MissSample";
    MetricType[MetricType["CosAppend"] = 46] = "CosAppend";
    MetricType[MetricType["CosPut"] = 47] = "CosPut";
    MetricType[MetricType["CosHead"] = 48] = "CosHead";
    MetricType[MetricType["CommonAssetMiss"] = 49] = "CommonAssetMiss";
    MetricType[MetricType["CommonAssetHit"] = 50] = "CommonAssetHit";
    MetricType[MetricType["DbClose"] = 51] = "DbClose";
    MetricType[MetricType["UploadCosExpired"] = 52] = "UploadCosExpired";
    MetricType[MetricType["Teardown"] = 53] = "Teardown";
    MetricType[MetricType["Resetup"] = 54] = "Resetup";
    MetricType[MetricType["CanvasCapture"] = 55] = "CanvasCapture";
    MetricType[MetricType["CosPost"] = 56] = "CosPost";
    MetricType[MetricType["CosPutWithWxData"] = 57] = "CosPutWithWxData";
    MetricType[MetricType["Status451"] = 58] = "Status451";
    MetricType[MetricType["ZstdCompressErr"] = 59] = "ZstdCompressErr";
    MetricType[MetricType["ZstdCompressExceedLoopQuota"] = 60] = "ZstdCompressExceedLoopQuota";
    MetricType[MetricType["CosHeadBackEnd"] = 61] = "CosHeadBackEnd";
    MetricType[MetricType["CosInfoMissing"] = 62] = "CosInfoMissing";
    MetricType[MetricType["GetAuxiliaryDomainInfo"] = 63] = "GetAuxiliaryDomainInfo";
    MetricType[MetricType["ParseAuxiliaryDomainInfo"] = 64] = "ParseAuxiliaryDomainInfo";
    MetricType[MetricType["CoslessMode"] = 65] = "CoslessMode";
    MetricType[MetricType["UploadCosSucessWithWxData"] = 66] = "UploadCosSucessWithWxData";
    MetricType[MetricType["UploadCosFailureWithWxData"] = 67] = "UploadCosFailureWithWxData";
    MetricType[MetricType["PublishDataToWebview"] = 68] = "PublishDataToWebview";
    MetricType[MetricType["ReceiveDataInWebview"] = 69] = "ReceiveDataInWebview";
    MetricType[MetricType["PackAppserviceDataIntoWebviewKvs"] = 70] = "PackAppserviceDataIntoWebviewKvs";
    MetricType[MetricType["WebviewHeartBeatTimeout"] = 71] = "WebviewHeartBeatTimeout";
    MetricType[MetricType["ReporterHeartBeatTimeout"] = 72] = "ReporterHeartBeatTimeout";
    MetricType[MetricType["ReporterChanged"] = 73] = "ReporterChanged";
    MetricType[MetricType["WebReporterSuspended"] = 74] = "WebReporterSuspended";
    MetricType[MetricType["WebReporterAliveButBeReplaced"] = 75] = "WebReporterAliveButBeReplaced";
    MetricType[MetricType["CustomizeBucketLifecycleListObjects"] = 76] = "CustomizeBucketLifecycleListObjects";
    MetricType[MetricType["CustomizeBucketLifecycleDeleteObjects"] = 77] = "CustomizeBucketLifecycleDeleteObjects";
    MetricType[MetricType["UnifiedReportSuccess"] = 78] = "UnifiedReportSuccess";
    MetricType[MetricType["UnifiedReportFailure"] = 79] = "UnifiedReportFailure";
    MetricType[MetricType["UnifiedReportWebviewSuccess"] = 1080] = "UnifiedReportWebviewSuccess";
    MetricType[MetricType["UnifiedReportWebviewFailure"] = 1081] = "UnifiedReportWebviewFailure";
    MetricType[MetricType["FetchCosInfoWithWXData"] = 1082] = "FetchCosInfoWithWXData";
    MetricType[MetricType["FetchCosInfoWithHTTPS"] = 1083] = "FetchCosInfoWithHTTPS";
    MetricType[MetricType["AutoSwitchToCosless"] = 1084] = "AutoSwitchToCosless";
    MetricType[MetricType["MaskSensitiveTextCount"] = 1090] = "MaskSensitiveTextCount";
    MetricType[MetricType["MaskSensitiveTextSlow"] = 1091] = "MaskSensitiveTextSlow";
    MetricType[MetricType["NetworkSuccess"] = 1100] = "NetworkSuccess";
    MetricType[MetricType["NetworkFail"] = 1101] = "NetworkFail";
    MetricType[MetricType["LegacySetupApi"] = 2099] = "LegacySetupApi";
    MetricType[MetricType["RealtimeLogSerializeError"] = 2100] = "RealtimeLogSerializeError";
    MetricType[MetricType["__DeprecatedUploadWxNetwork"] = 2101] = "__DeprecatedUploadWxNetwork";
    MetricType[MetricType["__DeprecatedUploadNetwork"] = 2101] = "__DeprecatedUploadNetwork";
    MetricType[MetricType["UploadWxCustomEvent"] = 2103] = "UploadWxCustomEvent";
    MetricType[MetricType["UploadCustomEvent"] = 2104] = "UploadCustomEvent";
    MetricType[MetricType["UploadWxRealtimeLog"] = 2105] = "UploadWxRealtimeLog";
    MetricType[MetricType["UploadRealtimeLog"] = 2106] = "UploadRealtimeLog";
    MetricType[MetricType["NetworkHandleError"] = 2107] = "NetworkHandleError";
    MetricType[MetricType["UploadWxReportEvent"] = 2108] = "UploadWxReportEvent";
    MetricType[MetricType["UploadReportEvent"] = 2109] = "UploadReportEvent";
    MetricType[MetricType["UploadWxNetwork"] = 2110] = "UploadWxNetwork";
    MetricType[MetricType["UploadNetwork"] = 2111] = "UploadNetwork";
    MetricType[MetricType["WebviewEventSaveFailed"] = 2112] = "WebviewEventSaveFailed";
    MetricType[MetricType["ConsoleErrorDrop"] = 2113] = "ConsoleErrorDrop";
    MetricType[MetricType["ConsoleErrorSerializeError"] = 2114] = "ConsoleErrorSerializeError";
    MetricType[MetricType["UploadWxSize"] = 80] = "UploadWxSize";
    MetricType[MetricType["UploadCosSize"] = 81] = "UploadCosSize";
    MetricType[MetricType["UploadCommonSize"] = 82] = "UploadCommonSize";
    MetricType[MetricType["HitCommonSize"] = 83] = "HitCommonSize";
    MetricType[MetricType["CanvasAllCaptureSize"] = 84] = "CanvasAllCaptureSize";
    MetricType[MetricType["CanvasUploadCaptureSize"] = 85] = "CanvasUploadCaptureSize";
    MetricType[MetricType["UploadCosSizeWithWxData"] = 86] = "UploadCosSizeWithWxData";
    MetricType[MetricType["PublishDataToWebviewSize"] = 87] = "PublishDataToWebviewSize";
    MetricType[MetricType["ReceiveDataInWebviewSize"] = 88] = "ReceiveDataInWebviewSize";
    MetricType[MetricType["ReportAppserviceDataInWebviewSize"] = 89] = "ReportAppserviceDataInWebviewSize";
    MetricType[MetricType["CustomizeBucketLifecycleDeleteObjectsSize"] = 90] = "CustomizeBucketLifecycleDeleteObjectsSize";
    MetricType[MetricType["UploadReportEventSize"] = 91] = "UploadReportEventSize";
    MetricType[MetricType["UploadRealtimeLogSize"] = 92] = "UploadRealtimeLogSize";
    MetricType[MetricType["UploadNetworkSize"] = 93] = "UploadNetworkSize";
    MetricType[MetricType["ServerClientTimeDiff"] = 94] = "ServerClientTimeDiff";
    MetricType[MetricType["UploadConsoleErrorSize"] = 95] = "UploadConsoleErrorSize";
    MetricType[MetricType["RegisterRefetchCosTokenFromExpire"] = 201] = "RegisterRefetchCosTokenFromExpire";
    MetricType[MetricType["TaskQueueDeadTaskDetected"] = 202] = "TaskQueueDeadTaskDetected";
    MetricType[MetricType["WebSnippetStart"] = 203] = "WebSnippetStart";
    MetricType[MetricType["WebSnippetEnd"] = 204] = "WebSnippetEnd";
    MetricType[MetricType["WebSnippetError"] = 205] = "WebSnippetError";
})(exports.MetricType || (exports.MetricType = {}));

exports.MutationType = void 0;
(function (MutationType) {
    MutationType[MutationType["ChildList"] = 1] = "ChildList";
    MutationType[MutationType["Attributes"] = 2] = "Attributes";
    MutationType[MutationType["CharacterData"] = 3] = "CharacterData";
    MutationType[MutationType["Properties"] = 4] = "Properties";
    MutationType[MutationType["Dimension"] = 5] = "Dimension";
    MutationType[MutationType["Canvas"] = 6] = "Canvas";
    MutationType[MutationType["Video"] = 7] = "Video";
    MutationType[MutationType["StyleSheets"] = 8] = "StyleSheets";
    MutationType[MutationType["ConstructedStyleSheets"] = 9] = "ConstructedStyleSheets";
})(exports.MutationType || (exports.MutationType = {}));
exports.VideoEventType = void 0;
(function (VideoEventType) {
    VideoEventType[VideoEventType["onVideoPlay"] = 0] = "onVideoPlay";
    VideoEventType[VideoEventType["onVideoPause"] = 1] = "onVideoPause";
    VideoEventType[VideoEventType["onVideoSeekCompelete"] = 2] = "onVideoSeekCompelete";
    VideoEventType[VideoEventType["onVideoTimeUpdate"] = 3] = "onVideoTimeUpdate";
})(exports.VideoEventType || (exports.VideoEventType = {}));
exports.UIEnv = void 0;
(function (UIEnv) {
    UIEnv[UIEnv["DOM"] = 1] = "DOM";
    UIEnv[UIEnv["Exparser"] = 2] = "Exparser";
})(exports.UIEnv || (exports.UIEnv = {}));
exports.ExparserNodeType = void 0;
(function (ExparserNodeType) {
    ExparserNodeType[ExparserNodeType["Element"] = 1] = "Element";
    ExparserNodeType[ExparserNodeType["Component"] = 2] = "Component";
    ExparserNodeType[ExparserNodeType["NativeNode"] = 3] = "NativeNode";
    ExparserNodeType[ExparserNodeType["VirtualNode"] = 4] = "VirtualNode";
    ExparserNodeType[ExparserNodeType["TextNode"] = 5] = "TextNode";
    ExparserNodeType[ExparserNodeType["Unknown"] = 6] = "Unknown";
})(exports.ExparserNodeType || (exports.ExparserNodeType = {}));
exports.ExparserCompPropType = void 0;
(function (ExparserCompPropType) {
    ExparserCompPropType[ExparserCompPropType["String"] = 1] = "String";
    ExparserCompPropType[ExparserCompPropType["Number"] = 2] = "Number";
    ExparserCompPropType[ExparserCompPropType["Boolean"] = 3] = "Boolean";
    ExparserCompPropType[ExparserCompPropType["JSON"] = 4] = "JSON";
    ExparserCompPropType[ExparserCompPropType["Null"] = 5] = "Null";
    ExparserCompPropType[ExparserCompPropType["Undefined"] = 6] = "Undefined";
})(exports.ExparserCompPropType || (exports.ExparserCompPropType = {}));

const CSSProps = {
    'align-content': 1,
    'align-items': 2,
    'align-self': 3,
    animation: 4,
    'animation-delay': 5,
    'animation-duration': 6,
    'animation-play-state': 7,
    background: 8,
    'background-color': 9,
    'background-image': 10,
    'background-position': 11,
    'background-repeat': 12,
    'background-size': 13,
    border: 14,
    'border-bottom': 15,
    'border-color': 16,
    'border-image': 17,
    'border-left': 18,
    'border-radius': 19,
    'border-right': 20,
    'border-spacing': 21,
    'border-style': 22,
    'border-top': 23,
    'border-width': 24,
    bottom: 25,
    'box-shadow': 26,
    'box-sizing': 27,
    clear: 28,
    clip: 29,
    color: 30,
    cursor: 31,
    direction: 32,
    display: 33,
    filter: 34,
    flex: 35,
    'flex-basis': 36,
    'flex-direction': 37,
    'flex-flow': 38,
    'flex-grow': 39,
    'flex-shrink': 40,
    'flex-wrap': 41,
    float: 42,
    font: 43,
    'font-family': 44,
    'font-size': 45,
    'font-style': 46,
    'font-weight': 47,
    grid: 48,
    'grid-area': 49,
    'grid-auto-columns': 50,
    'grid-auto-flow': 51,
    'grid-auto-rows': 52,
    'grid-column': 53,
    'grid-row': 54,
    'grid-template': 55,
    height: 56,
    'justify-content': 57,
    left: 58,
    'letter-spacing': 59,
    'line-height': 60,
    'list-style': 61,
    margin: 62,
    'margin-bottom': 63,
    'margin-left': 64,
    'margin-right': 65,
    'margin-top': 66,
    'max-height': 67,
    'max-width': 68,
    'min-height': 69,
    'min-width': 70,
    opacity: 71,
    order: 72,
    outline: 73,
    'outline-color': 74,
    'outline-offset': 75,
    'outline-style': 76,
    'outline-width': 77,
    overflow: 78,
    'overflow-x': 79,
    'overflow-y': 80,
    padding: 81,
    'padding-bottom': 82,
    'padding-left': 83,
    'padding-right': 84,
    'padding-top': 85,
    'pointer-events': 86,
    position: 87,
    right: 88,
    'table-layout': 89,
    'text-align': 90,
    'text-decoration': 91,
    'text-indent': 92,
    'text-overflow': 93,
    'text-shadow': 94,
    'text-transform': 95,
    top: 96,
    transform: 97,
    transition: 98,
    'transition-delay': 99,
    'transition-duration': 100,
    'transition-property': 101,
    'user-select': 102,
    'vertical-align': 103,
    visibility: 104,
    'white-space': 105,
    width: 106,
    'word-break': 107,
    'word-spacing': 108,
    'word-wrap': 109,
    'z-index': 110,
};
const CSSPropsReverse = [];
for (const key in CSSProps) {
    CSSPropsReverse[CSSProps[key]] = key;
}

exports.EventType = void 0;
(function (EventType) {
    EventType[EventType["TouchStart"] = 1] = "TouchStart";
    EventType[EventType["TouchMove"] = 2] = "TouchMove";
    EventType[EventType["TouchEnd"] = 3] = "TouchEnd";
    EventType[EventType["TouchCancel"] = 4] = "TouchCancel";
    EventType[EventType["MouseDown"] = 5] = "MouseDown";
    EventType[EventType["MouseMove"] = 6] = "MouseMove";
    EventType[EventType["MouseUp"] = 7] = "MouseUp";
    EventType[EventType["Tap"] = 8] = "Tap";
    EventType[EventType["LongTap"] = 9] = "LongTap";
    EventType[EventType["Click"] = 10] = "Click";
    EventType[EventType["DoubleClick"] = 11] = "DoubleClick";
    EventType[EventType["ContextMenu"] = 12] = "ContextMenu";
    EventType[EventType["Scroll"] = 13] = "Scroll";
    EventType[EventType["Selection"] = 14] = "Selection";
    EventType[EventType["Resize"] = 15] = "Resize";
    EventType[EventType["WxInput"] = 16] = "WxInput";
    EventType[EventType["VisibilityChange"] = 17] = "VisibilityChange";
    EventType[EventType["Routing"] = 18] = "Routing";
    EventType[EventType["InputChange"] = 19] = "InputChange";
    EventType[EventType["InitDOM"] = 20] = "InitDOM";
    EventType[EventType["Mutation"] = 21] = "Mutation";
    EventType[EventType["AppserviceCanvas"] = 22] = "AppserviceCanvas";
    EventType[EventType["DevCodeInfo"] = 23] = "DevCodeInfo";
    EventType[EventType["ComponentEvent"] = 24] = "ComponentEvent";
    EventType[EventType["Perf"] = 30] = "Perf";
    EventType[EventType["Error"] = 31] = "Error";
    EventType[EventType["Log"] = 32] = "Log";
    EventType[EventType["Env"] = 40] = "Env";
    EventType[EventType["WindowState"] = 41] = "WindowState";
    EventType[EventType["Config"] = 42] = "Config";
    EventType[EventType["CusttomAttr"] = 43] = "CusttomAttr";
    EventType[EventType["Memo"] = 44] = "Memo";
    EventType[EventType["StayTime"] = 50] = "StayTime";
    EventType[EventType["Copy"] = 80] = "Copy";
    EventType[EventType["Paste"] = 81] = "Paste";
    EventType[EventType["Cut"] = 82] = "Cut";
    EventType[EventType["Depth"] = 83] = "Depth";
    EventType[EventType["EleExposure"] = 84] = "EleExposure";
    EventType[EventType["EleUnExposure"] = 85] = "EleUnExposure";
    EventType[EventType["CommonDeps"] = 86] = "CommonDeps";
    EventType[EventType["CustomEvent"] = 88] = "CustomEvent";
    EventType[EventType["UiReaction"] = 89] = "UiReaction";
    EventType[EventType["PrivateConfig"] = 90] = "PrivateConfig";
    EventType[EventType["NetworkAPI"] = 110] = "NetworkAPI";
    EventType[EventType["ConsoleError"] = 111] = "ConsoleError";
    EventType[EventType["ConsoleWarn"] = 112] = "ConsoleWarn";
    EventType[EventType["RTLogError"] = 113] = "RTLogError";
    EventType[EventType["RTLogWarn"] = 114] = "RTLogWarn";
    EventType[EventType["PerfAPI"] = 115] = "PerfAPI";
    EventType[EventType["NetworkWeak"] = 116] = "NetworkWeak";
    EventType[EventType["NetworkStatus"] = 117] = "NetworkStatus";
    EventType[EventType["FirstExposure"] = 118] = "FirstExposure";
    EventType[EventType["WebNetwork"] = 119] = "WebNetwork";
    EventType[EventType["InformationAmount"] = 122] = "InformationAmount";
    EventType[EventType["SimpleRepetitiveEvent"] = 130] = "SimpleRepetitiveEvent";
    EventType[EventType["ConsecutiveRepetitiveEvent"] = 131] = "ConsecutiveRepetitiveEvent";
})(exports.EventType || (exports.EventType = {}));
exports.ReportEnvType = void 0;
(function (ReportEnvType) {
    ReportEnvType[ReportEnvType["Appservice"] = 1] = "Appservice";
    ReportEnvType[ReportEnvType["Webview"] = 2] = "Webview";
})(exports.ReportEnvType || (exports.ReportEnvType = {}));
exports.MemoDomain = void 0;
(function (MemoDomain) {
    MemoDomain[MemoDomain["Is"] = 1] = "Is";
    MemoDomain[MemoDomain["Tag"] = 2] = "Tag";
    MemoDomain[MemoDomain["Classname"] = 3] = "Classname";
    MemoDomain[MemoDomain["NodeAttrKey"] = 4] = "NodeAttrKey";
    MemoDomain[MemoDomain["NodeAttrValue"] = 5] = "NodeAttrValue";
    MemoDomain[MemoDomain["CSSProperty"] = 6] = "CSSProperty";
    MemoDomain[MemoDomain["CSSPropertyValue"] = 7] = "CSSPropertyValue";
    MemoDomain[MemoDomain["CompProperty"] = 8] = "CompProperty";
    MemoDomain[MemoDomain["NodeValue"] = 9] = "NodeValue";
    MemoDomain[MemoDomain["CompPropertyValue"] = 10] = "CompPropertyValue";
    MemoDomain[MemoDomain["ExpNodeValue"] = 11] = "ExpNodeValue";
    MemoDomain[MemoDomain["TapHandlerName"] = 12] = "TapHandlerName";
})(exports.MemoDomain || (exports.MemoDomain = {}));
exports.RouteType = void 0;
(function (RouteType) {
    RouteType[RouteType["Init"] = 0] = "Init";
    RouteType[RouteType["PushState"] = 1] = "PushState";
    RouteType[RouteType["ReplaceState"] = 2] = "ReplaceState";
    RouteType[RouteType["PopState"] = 3] = "PopState";
})(exports.RouteType || (exports.RouteType = {}));
exports.IWxInputType = void 0;
(function (IWxInputType) {
    IWxInputType[IWxInputType["Change"] = 0] = "Change";
    IWxInputType[IWxInputType["Focus"] = 1] = "Focus";
    IWxInputType[IWxInputType["Blur"] = 2] = "Blur";
})(exports.IWxInputType || (exports.IWxInputType = {}));
exports.WxComponentEventNumType = void 0;
(function (WxComponentEventNumType) {
    WxComponentEventNumType[WxComponentEventNumType["load"] = 1] = "load";
    WxComponentEventNumType[WxComponentEventNumType["error"] = 2] = "error";
})(exports.WxComponentEventNumType || (exports.WxComponentEventNumType = {}));

exports.CSSProps = CSSProps;
exports.CSSPropsReverse = CSSPropsReverse;
