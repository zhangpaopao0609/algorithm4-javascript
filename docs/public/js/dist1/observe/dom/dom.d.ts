import { INodeInfo, IPatchNodeInfo } from '@tel/types/types';
import { IPublicTask } from '@tel/orchestrate/taskqueue';
export declare function reset(): void;
export declare function init(roots: HTMLElement[]): Promise<void>;
/**
 * tree traversal:
 *   order: dfs (don't use bfs, because dfs can ensure scanning first visible screen first)
 */
export declare function addTree(root: Node, onNodeFound: (ret: IAddNodeRet, slice: number) => void): IPublicTask<any>;
/**
 * * EDGE CASE 1: the node is inited twice or more (two or more Init/Mutation_Add events with the same node)
 *    this can happen in such async flow:
 *      1. the node is inited/added
 *      2. init task is paused due to task timeout
 *      3. the node is removed and held in memory
 *      4. some changes may happen to the detached node
 *      5. the node is added again to an undiscovered node
 *      6. init task resumed and found the same node instance again
 *    in such case, the observed events (on the node) in sequence:
 *      case 1: init_slice_1 (old loc), init_slice_2 (new loc), remove (old loc), add (new loc):
 *      case 2: add_slice_1 (old loc), add_slice_2 (new loc), remove (old loc), add (new loc):
 *    solution: IgnoreStaleEvent principle. All events will be collected but such case will be
 *              identified during playback.
 *
 * * EDGE CASE 2: two or more mutation_add event of the same node happened before the node is processed
 *    scenario:
 *      1. mutation_add, the node is added to location_1 and the node's processing is deferred
 *      2. mutation_remove, the node is removed, not processed yet
 *      3. mutation_add, the node is added again, but to location_2, not processed yet
 *    consequence: during playback, we would incorrectly assume that the node is first added to location_2
 *    solution: IgnoreStaleEvent principle.
 *
 * * EDGE CASE 3: during n-th slice (n > 1), a node in the queue might have been moved to another location
 *             where its parent/previousSibling is not yet collected
 *      solution:
 *        1. if its parent is not yet collected, the node will later be collected as the child of the
 *           new parent, and thus making it fine.
 *        2. if its parent is collected but not its previousSibling, that means the node is re-ordered,
 *           and the new position information will be picked up while processing subsequent mutation
 *           events, and thus making it fine again.
 *
 * * Note: async processing comes with unrecoverable consequences.
 *
 * * Principles:
 *   * IgnoreStaleEvent Principle:
 *       If an event's observed time is smaller than the event target's last modified time, ignore it.
 *       detail: When updating internal cache of vd tree, we need to check timestamp first, and ensure we
 *               only update the node's data when the changes took place after the last time we scan the node.
 *       scenario: the node is added but not yet processed, and there're a subsequent attribute change or some
 *                 other events on the node. By the time we process the first event, it may already be it's final
 *                 state, and the subsequent events should only be recorded and should not alter internal cache.
 *
 * TODO: check exclude
 */
export declare function addNode(node: Node): IAddNodeRet;
export declare function getNodePos(node: Node): {
    parentId: number | undefined;
    prevId: number | undefined;
};
export declare function updateNodePos(node: Node): void;
export declare function getNodeId(node: Node): number | undefined;
export declare function getNodeInfo(id: number): INodeInfo;
interface IAddNodeRet {
    info?: INodeInfo;
    update?: boolean;
    diff?: IPatchNodeInfo;
    subroot?: Node;
}
export declare function getIframeMap(): WeakMap<Document, HTMLIFrameElement>;
export {};
