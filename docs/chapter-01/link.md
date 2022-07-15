# 链表

## 1. 链表基础

定义：链表是一种递归的数据结构，它或者为空（null），或者指向一个节点（node）的引用，**该节点含有一个泛型的<span style="color:red">元素</span>和一个<span style="color:red">指向另一条链表的引用</span>**。

> 泛型：任意类型数据

<div align='center'>
  <img src="/assets/chapter-01/Link/node.png" alt="image-20220329080948444" style="zoom:30%;" />
</div>

<div align='center'>
  <img src="/assets/chapter-01/Link/link.png" alt="image-20220329080948444" style="zoom:40%;" />
</div>

1. 用 js 表示一个结点

   ```js
   class Node {
     constructor(value = null, next = null) {
       this.value = value;
       this.next = next;
     }
   }
   ```

2. 创建一条链表

   ```js
   let first = new Node('1');
   const second = new Node('2');
   const third = new Node('3');

   first.next = second;
   second.next = third;

   console.log(JSON.stringify(first, null, 2));
   // {
   //   "value": "1",
   //   "next": {
   //     "value": "2",
   //     "next": {
   //       "value": "3",
   //       "next": null
   //     }
   //   }
   // }
   ```

3. 在表头插入结点

   ```js
   function insertNodeAtHead(link, node) {
     node.next = link;
     return node;
   }

   const insert = new Node('0', first);
   first = insertNodeAtHead(first, insert);
   console.log(JSON.stringify(first, null, 2));

   // {
   //   "value": "0",
   //   "next": {
   //     "value": "1",
   //     "next": {
   //       "value": "2",
   //       "next": {
   //         "value": "3",
   //         "next": null
   //       }
   //     }
   //   }
   // }
   ```

4. 删除表头结点

   ```js
   function deleteNodeAtHead(link) {
     link.value = null;
     return link.next;
   }

   first = deleteNodeAtHead(first);
   console.log(JSON.stringify(first, null, 2));

   // {
   //   "value": "2",
   //   "next": {
   //     "value": "3",
   //     "next": null
   //   }
   // }
   ```

5. 在表尾插入结点

   ```js
   function insertNodeInTail(link, node) {
     let p = link;
     while (p.next !== null) {
       p = p.next;
     }
     p.next = node;
   }

   const insert = new Node('4');
   insertNodeInTail(first, insert);
   console.log(JSON.stringify(first, null, 2));

   // {
   //   "value": "1",
   //   "next": {
   //     "value": "2",
   //     "next": {
   //       "value": "3",
   //       "next": {
   //         "value": "4",
   //         "next": null
   //       }
   //     }
   //   }
   // }
   ```

6. 用链表实现栈

   ```js
   class StackByLink {
     constructor() {
       this.link = null;
       this._size = 0;
     }

     push(value) {
       this._size += 1;
       this.link = new Node(value, this.link);
     }

     pop() {
       if (this._size !== 0) {
         this._size -= 1;
         const value = this.link.value;
         this.link = this.link.next;
         return value;
       }
       return null;
     }

     size() {
       return this._size;
     }

     isEmpty() {
       return !this._size;
     }
   }
   ```

7. 用链表实现队列

   ```js
   class QueueByLink {
     constructor() {
       this.link = null;
       this.last = null;
       this._size = 0;
     }

     enqueuq(value) {
       // 链尾添加
       if (this._size === 0) {
         this.last = new Node(value, null);
         this.link = this.last;
       } else {
         const oldLast = this.last;
         this.last = new Node(value, null);
         oldLast.next = this.last;
       }
       this._size += 1;
     }

     dequeuq() {
       // 链头删除
       if (this._size !== 0) {
         this._size -= 1;
         const value = this.link.value;
         this.link = this.link.next;
         return value;
       }
       return null;
     }

     size() {
       return this._size;
     }

     isEmpty() {
       return !this._size;
     }
   }
   ```

数组：顺序存储，数组中是元素

链表：链式存储，链表中是节点
