import { IOrchestratorOptions } from './orchestrate/orchestrator';
import { ICOSInfo } from './utils/cos/cos';
export * from './types/types';
export declare function init(opt: IOrchestratorOptions): void;
export declare function teardown(): Promise<void>;
export declare function resetCosInfo(cosInfo: ICOSInfo): void;
export declare function syncState(state: IAppservicePXState): void;
declare const _default: {
    init: typeof init;
    resetCosInfo: typeof resetCosInfo;
    teardown: typeof teardown;
    canvasCollect: (canvasFrame: {
        data: string;
        nodeId: number;
        height: number;
        width: number;
        timestamp: number;
    }) => void;
    syncState: typeof syncState;
};
export default _default;
interface IAppservicePXState {
    localUid?: string;
    customUid?: string;
    networkStatus?: string;
    sessionLifeTimeMeta?: {
        weSessionId: string;
        wesessionScene: number;
        wesessionSceneNote: string;
        isWesessionEntrance: number;
        openSource: number;
    };
    coslessMode?: boolean;
}
