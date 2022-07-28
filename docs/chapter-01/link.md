---
page: true
title: link
outline: deep
returnToTop: true
---

# 链表 {#link}

链表是的线性表的一个类别，在学习链表之前，让我们先来看看线性表。

:::tip
《算法 4》 中并没有涉及到线性表，但是这属于数据结构中非常基础的部分，对于学习链表也非常有价值，因此在这里提出，如果你了解的话，可以直接跳到第 2 小结。
:::

## 1. 线性表 {#linear-list}

### 1.1 线性表 {#linear-l}

线性表是一种线性存储结构，什么是线性存储结构呢？通俗的理解就是：一组数据存储在物理空间中，可以用“一根线”线性地把它串起来。

比如有这样一组数组：1，2，3，4，5，将其线性的存储起来，有两种方式：

<div align='center'>
  <img src="/assets/chapter-01/link/liner-list.jpeg" alt="image-20220329080948444" style="zoom:20%;" />
</div>

这两种方式都是线性存储的，但第一种是按照物理空间依次存储的，第二种是随机存储的。
第一种是多数人想到的存储方式，而第二种却少有人想到。那么数据是否成功地存储了呢？这取决于能否将数据完整地复原成它本来的样子。如果把两种方式的线的一头扯起，就会发现数据的位置次序是没有发生改变的。因此可以认定，这两种存储方式都是正确的。

### 1.2 线性表的顺序存储结构（顺序表）{#sequential-list}

线性表的顺序表示指的是用一组地址连续的存储单元依次存储线性表的数据元素，这种表示也称作线性表的顺序存储结构或顺序映像。通常，称这种存储结构的线性表为顺序表（Sequential List）。**其特点是，逻辑上相邻的数据元素，其物理次序也是相邻的**。

在高级程序设计语言中，通常都用数组来描述数据结构中的顺序存储结构。

1.1 中图 1 的第一种方式就是顺序表

### 1.3 线性表的链式存储结构（链表）{#link-list}

线性表链式存储结构的特点是：用一组任意的存储单元存储线性表的数据元素（这组存储单元可以是连续的，也可以是不连续的）。

因此，为了表示每个数据元素 ai 与其直接后继数据元素 ai+1 之间的逻辑关系，对数据元素 ai 来说，除了存储其本身的信息之外，还需存储一个指示其直接后继的信息（即直接后继的存储位置）。这两部分信息组成数据元素 ai 的存储映像，称为结点（node）。

它包括两个域：其中存储数据元素信息的域称为数据域；存储直接后继存储位置的域称为指针域。指针域中存储的信息称作指针或链。n 个结点（ai（1≤i≤n）的存储映像）链结成一个链表，即为线性表(a1, a2,…, an)的链式存储结构。又由于此链表的每个结点中只包含一个指针域，故又称线性链表或单链表。

1.1 中图 1 的第二种方式就是链表

### 1.4 小结

- 线性表是一种线性存储结构
- 线性表顺序存储就是顺序表
- 线性表链式存储就是顺序表（可以顺序存储，也可不顺序存储，可连续存储，也可不连续存储）

## 2. 链表基础

定义：链表是一种递归的数据结构，它或者为空（null），或者指向一个节点（node）的引用，**该节点含有一个泛型的<span style="color:red">元素</span>和一个<span style="color:red">指向另一条链表的引用</span>**。

> 泛型：任意类型数据

<div align='center'>
  <img src="/assets/chapter-01/Link/node.png" alt="image-20220329080948444" style="zoom:30%;" />
</div>

<div align='center'>
  <img src="/assets/chapter-01/Link/link.png" alt="image-20220329080948444" style="zoom:40%;" />
</div>

### 2.1. 链表分类

根据链表结点所含指针个数、指针指向和指针连接方式，可将链表分为单链表、循环链表、双向链表、二叉链表、十字链表、邻接表、邻接多重表等。其中单链表、循环链表和双向链表用于实现线性表的链式存储结构，其他形式多用于实现树和图等非线性结构。

### 2.2 链表操作

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
