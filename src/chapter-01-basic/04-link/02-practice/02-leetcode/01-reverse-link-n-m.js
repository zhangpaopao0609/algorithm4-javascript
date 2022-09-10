// 给你单链表的头指针 head 和两个整数 left 和 right，其中 left <= right 。请你反转从位置 left 到位置 right 的链表结点，返回 反转后的链表。

const { Node, link } = require('./00-node');
let first = link;

// 反转链表
function reverseLink(head) {
  let curr = null;
  let prev = head;
  while (prev) {
    const next = prev.next;
    prev.next = curr;
    curr = prev;
    prev = next;
  }
}

function reverseBetweenNM(head, left, right) {
  const dummyNode = new Node(-1, head); // 虚拟头结点
  let preLeft = dummyNode; // 左截断结点前一个结点
  let leftNode = null; // 左截断结点
  let rightNode = null; // 右截断结点
  let afterRight = null; // 右截断结点后一个结点
  // 1. 获取左截断结点前一个结点
  for (let i = 0; i < left - 1; i++) {
    preLeft = preLeft.next;
  }
  // 2. 获取左截断结点
  leftNode = preLeft.next;

  rightNode = leftNode;
  // 3. 获取右截断结点
  for (let i = 0; i < right - left; i++) {
    rightNode = rightNode.next;
  }
  // 4. 获取右截断结点后一个结点
  afterRight = rightNode.next;
  // 5. 反转截断的链表
  rightNode.next = null;
  reverseLink(leftNode);
  // 6. 左截断结点前一个结点连接上反转后的链表
  preLeft.next = rightNode;
  // 7. 反转后的链表尾结点为左截断结点，结点连接右截断结点后一个结点
  leftNode.next = afterRight;
  // 8. 返回链表
  return dummyNode.next;
}

// console.log(JSON.stringify(reverseBetweenNM(first, 2, 4), null, 2));

function reverseBetweenNMBetter(head, left, right) {
  const dummyNode = new Node(-1, head); // 虚拟头结点
  let preLeft = dummyNode; // 左截断结点前一个结点

  for (let i = 0; i < left - 1; i++) {
    preLeft = preLeft.next;
  }

  let leftNode = preLeft.next;
  let rightNode = leftNode;
  let curr = null;
  for (let i = 0; i < right - left + 1; i++) {
    const node = rightNode;
    rightNode = rightNode.next;
    node.next = curr;
    curr = node;
  }

  preLeft.next = curr;
  leftNode.next = rightNode;

  return dummyNode.next;
}

function reverseBetweenNMPerfect(head, left, right) {
  const dummyNode = new Node(-1, head); // 虚拟头结点
  let preLeft = dummyNode; // 左截断结点前一个结点

  for (let i = 0; i < left - 1; i++) {
    preLeft = preLeft.next;
  }

  let curr = preLeft.next;
  let leftNode = curr;
  for (let i = 0; i < right - left; i++) {
    const next = curr.next;
    curr.next = next.next;
    next.next = leftNode;
    leftNode = next;
  }

  preLeft.next = leftNode;

  return dummyNode.next;
}
console.log(JSON.stringify(reverseBetweenNMPerfect(first, 2, 4), null, 2));
