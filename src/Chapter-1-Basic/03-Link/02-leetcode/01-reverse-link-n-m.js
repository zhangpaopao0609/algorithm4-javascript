const { Node, link } = require('./00-node');
let first = link;

function reverseNM_v1(link, n, m) {
  if (n <= 0) throw Error('n should larger than 0')
  let before = null;
  for (let first = link, i = n - 1; i--; first = first.next) {
    before = first;
  }

  const start = before ? before.next : link;
  let reverse = null;
  let after = null;
  let last = null;

  for (let first = start, i = m - n + 1; i-- && first; first = first.next) {
    const node = new Node(first.value, reverse);
    if (!last) last = node;
    reverse = node;
    after = first.next;
  }
  
  before && (before.next = reverse);
  last.next = after;
  return before ? link : reverse;
};

function reverseNM_v2(link, n, m) {
  if (n <= 0) throw Error('n should larger than 0')
  let before = null;
  for (let first = link, i = n - 1; i--; first = first.next) {
    before = first;
  }

  const start = before ? before.next : link;
  let reverse = null;
  let after = null;
  let last = null;

  for (after = start, i = m - n + 1; i-- && after; null) {
    const node = after;
    after = after.next;
    node.next = reverse;
    reverse = node;
    if (!last) last = node;
  }
  
  before && (before.next = reverse);
  last.next = after;
  return before ? link : reverse;
};

// const r = reverseNM_v1(first, 2, 3);
// console.log(JSON.stringify(r, null, 2));
console.log(JSON.stringify(reverseNM_v2(first, 1, 3), null, 2));
console.log(JSON.stringify(first, null, 2));



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// 反转链表
const reverseLink = function(head) {
  let curr = null;
  let prev = head;
  while(prev) {
    const next = prev.next;
    prev.next = curr;
    curr = prev;
    prev = next;
  };
  return curr;
}

const reverseBetween = function(head, left, right) {
  // 因为头节点有可能发生变化，使用虚拟头节点可以避免复杂的分类讨论
  const dummyNode = new ListNode(-1);
  dummyNode.next = head;

  let pre = dummyNode;
  // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
  // 建议写在 for 循环里，语义清晰
  for (let i = 0; i < left - 1; i++) {
      pre = pre.next;
  }

  // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
  let rightNode = pre;
  for (let i = 0; i < right - left + 1; i++) {
      rightNode = rightNode.next;
  }

  // 第 3 步：切断出一个子链表（截取链表）
  let leftNode = pre.next;
  let curr = rightNode.next;

  // 注意：切断链接
  pre.next = null;
  rightNode.next = null;

  // 第 4 步：同第 206 题，反转链表的子区间
  reverseLink(leftNode);

  // 第 5 步：接回到原来的链表中
  pre.next = rightNode;
  leftNode.next = curr;
  return dummyNode.next;
};
