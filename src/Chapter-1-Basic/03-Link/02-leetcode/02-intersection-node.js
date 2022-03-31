// 题目
// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。

const getIntersectionNode_v1 = function(headA, headB) {
  let temp = 
};

const getIntersectionNode_v2 = function(headA, headB) {
  if (headA === null || headB === null) return null;
  let pA = headA, pB = headB;
  while(pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;
};