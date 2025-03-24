import { IPublicTask } from '@tel/orchestrate/taskqueue';
export declare let observer: IntersectionObserver | null;
export declare function start(): void;
export declare function reset(): void;
export declare function mountExposureListener(root: HTMLElement): IPublicTask<any> | undefined;
