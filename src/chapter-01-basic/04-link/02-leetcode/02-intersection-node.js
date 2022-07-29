// 题目
// 给你两个单链表的头结点 headA 和 headB ，请你找出并返回两个单链表相交的起始结点。如果两个链表不存在相交结点，返回 null 。

const getIntersectionNode_v1 = function (headA, headB) {
  let temp = headA;
  const visited = new Set();
  while (temp !== null) {
    visited.add(temp);
    temp = temp.next;
  }

  temp = headB;
  while (temp !== null) {
    if (visited.has(temp)) {
      return temp;
    }
    temp = temp.next;
  }
  return null;
};

const getIntersectionNode_v2 = function (headA, headB) {
  if (headA === null || headB === null) return null;
  let pA = headA,
    pB = headB;
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;
};
