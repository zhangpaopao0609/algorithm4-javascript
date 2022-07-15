# 练习

## 1. 课后习题

1. 假设 x 是一条链表的某个结点且不是尾结点。下面这条语句的效果是什么？

   ```js
   x.next = x.next.next;
   ```

2. 编写一个方法 delete()，接收一个参数 k，删除链表的第 k 个元素，如果它存在的话

3. 假设 x 是一条链表中的某个结点，下面这段代码做了什么？

   ```js
   t.next = x.next;
   x.next = t;
   ```

4. 为什么下面这段代码和上一道题中的代码效果不同

   ```js
   x.next = t;
   t.next = x.next;
   ```

5. 编写一个函数，接受一条链表的首结点作为参数，（破坏性地）将链表反转并返回结果链表的首结点

   ```js
   function reverse_v2(link) {
     let p = link;
     let reverse = null;

     while (p !== null) {
       const node = p;
       p = p.next;
       node.next = reverse;
       reverse = node;
     }

     return reverse;
   }
   ```

## 2. LeetCode 题目

1. 给你单链表的头指针 head 和两个整数 left 和 right，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回反转后的链表。

   - 解法 1

     ```js
     class Node {
       constructor(value = null, next = null) {
         this.value = value;
         this.next = next;
       }
     }

     const reverseLink = function (head) {
       let curr = null;
       let prev = head;
       while (prev) {
         const next = prev.next;
         prev.next = curr;
         curr = prev;
         prev = next;
       }
       return curr;
     };

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

       rightNode = preLeft;
       // 3. 获取右截断结点
       for (let i = 0; i < right - left + 1; i++) {
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
     ```

   - 解法 2

     ```js
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
     ```

   - 解法 3

     ```js
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
     ```

2. 给你两个单链表的头节点 headA 和 headB ，两条链表可能相交也可能不相交，如果相交请你找出并返回两个单链表相交的起始节点，如果不存在相交节点，返回 null。

   - 解法 1

     ```js
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
     ```

   - 解法 2

     ```js
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
     ```
