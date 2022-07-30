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

线性表是一种按照线性存储结构，什么是线性存储结构呢？通俗的理解就是：一组数据存储在物理空间中，可以用“一根线”线性地把它串起来。

比如有这样一组数组：1，2，3，4，5，将其线性的存储起来，有两种方式：

<div align='center'>
  <img src="/assets/chapter-01/link/liner-list.jpeg" alt="image-20220329080948444" style="zoom:20%;" />
  <p style="font-size: 12px; font-weight: bold">图1：两种存储线性表的方式</p>
</div>

这两种方式都是线性存储的，但第一种是按照物理空间依次存储的，第二种是随机存储的。

第一种是多数人想到的存储方式，而第二种却少有人想到。那么数据是否成功地存储了呢？这取决于能否将数据完整地复原成它本来的样子。如果把两种方式的线的一头扯起，就会发现数据的位置次序是没有发生改变的。因此可以认定，这两种存储方式都是正确的。

:::tip
线性表的定义和特点的详细说明可以参见：《数据结构（C 语言版本）（第二版）》2.1 线性表的定义和特点
:::

### 1.2 线性表的顺序表示（顺序表）{#sequential-list}

线性表的顺序表示指的是用一组**地址连续的存储单元依次存储线性表的数据元素**，这种表示也称作线性表的顺序存储结构或顺序映像。通常，称这种存储结构的线性表为顺序表（Sequential List）。**其特点是，逻辑上相邻的数据元素，其物理次序也是相邻的**。

在高级程序设计语言中，通常都用数组来描述数据结构中的顺序存储结构。

1.1 中图 1 的第一种存储方式就是顺序存储结构 —— 顺序表

### 1.3 线性表的顺序表示（链表）{#link-list}

线性表链式存储结构的特点是：用一组任意的存储单元存储线性表的数据元素（这组存储单元可以是连续的，也可以是不连续的）。

因此，为了表示每个数据元素 a<sub>i</sub> 与其直接后继数据元素 a<sub>i+1</sub> 之间的逻辑关系，对数据元素 a<sub>i</sub> 来说，除了存储其本身的信息之外，还需存储一个指示其直接后继的信息（即直接后继的存储位置）。这两部分信息组成数据元素 a<sub>i</sub> 的存储映像，称为结点（node）。

一个结点包括两个域：

- 数据域：存储数据元素信息的域
- 指针域：存储直接后继存储位置的域。指针域中存储的信息称作指针或链。

n 个结点（a<sub>i</sub>（1≤i≤n）的存储映像）链结成一个链表，即为线性表(a<sub>1</sub>, a<sub>2</sub>,…, a<sub>n</sub>)的链式存储结构。又由于此链表的每个结点中只包含一个指针域，故又称线性链表或单链表。

1.1 中图 1 的第二种方式就是链式存储结构 —— 链表

### 1.4 小结

- 线性表是一种线性存储结构
- 线性表顺序存储就是顺序表
- 线性表链式存储就是顺序表（可以顺序存储，也可不顺序存储，可连续存储，也可不连续存储）

## 2. 链表

### 2.1. 基本定义

定义：链表是一种递归的数据结构，它或者为空（null），或者指向一个结点（node）的引用，**该结点含有一个泛型的<span style="color:red">元素</span>和一个<span style="color:red">指向另一条链表的引用</span>**。

> 泛型：任意类型数据

<div align='center'>
  <img src="/assets/chapter-01/link/node.png" alt="image-20220329080948444" style="zoom:26%;" />
  <p style="font-size: 12px; font-weight: bold">图1：链表结点</p>
</div>

<div align='center'>
  <img src="/assets/chapter-01/link/link.png" alt="image-20220329080948444" style="zoom:30%;" />
  <p style="font-size: 12px; font-weight: bold">图2：链表</p>
</div>

### 2.2. 链表分类

根据链表结点所含指针个数、指针指向和指针连接方式，可将链表分为单链表、循环链表、双向链表、二叉链表、十字链表、邻接表、邻接多重表等。

其中单链表、循环链表和双向链表用于实现线性表的链式存储结构，其他形式多用于实现树和图等非线性结构。

最常见的就是单链表，我们也主要对单链表进行学习。

### 2.3. 链表基础操作

1. 用 js 表示一个结点

   按照结点的定义：

   - 含有一个泛型的元素（这里的泛型可以简单的理解为任何类型）
   - 指向另一条链表的引用（也就是说，有一个指向另一个结点的值）

   ```js
   class Node {
     constructor(value = null, next = null) {
       this.value = value; // 元素
       this.next = next; // 指向另一条链表，另一个结点的值
     }
   }
   ```

   :::tip
   其实定义结点用 ts 更加合适，因为结点的指针指向的要么是一个结点，要么是 null，所以用 ts 更好地实现这样的嵌套类，实现类型的检查。

   ```ts
   class LinkNode {
     value: any;
     next: LinkNode | null;

     constructor(value: any = null, next: LinkNode | null = null) {
       this.value = value;
       this.next = next;
     }
   }
   ```

   :::

2. 创建一条链表

   创建一条链表非常的简单，只需要将所有的结点连接起来，就形成了一条链表

   - 用定义好的 Node 类创建结点
   - 将结点按照期望的顺序连接起来（怎么连接？前一个结点的 next 指向后一个结点即可）

   此时：

   - first 就是一条拥有三个结点的链表，first 是一个结点的引用，该结点含有一个指向 second 的引用
   - second 同样是一个拥有两个结点的链表，second 同样是一个结点的引用，该结点含有一个指向 first 的引用
   - third 同样是一个拥有一个结点的链表，third 也是一个结点的引用，该节点指向 null，即空链表

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

   非常的简单，总结一句话：**新结点的指针指向链表表头即完成在表头插入结点**

  <div align='center'>
    <img src="/assets/chapter-01/link/insert-head.png" alt="image-20220329080948444" style="zoom:60%;" />
    <p style="font-size: 12px; font-weight: bold">图1：在链表头部插入结点</p>
  </div>

```js
function insertNodeAtHead(link, node) {
  node.next = link;
  return node;
}

const insert = new Node('0', null);
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

   非常的简单，同样总结一句话：**表头结点修改为表头的下一个结点即完成表头结点的删除**
   :::tip
   删除后，旧的头结点其实并没有直接删除，而是等到内存回收机制来对它进行处理，如果这个结点没有任何地方引用，那么就会清除掉，否者仍然保留
   :::
    <div align='center'>
      <img src="/assets/chapter-01/link/delete-head.png" alt="image-20220329080948444" style="zoom:60%;" />
      <p style="font-size: 12px; font-weight: bold">图2：删除链表首结点</p>
    </div>

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

   非常的简单，同样总结一句话：**从表头开始，循环找到尾结点，尾结点的指针指向新结点即完成表尾插入新结点**。

    <div align='center'>
      <img src="/assets/chapter-01/link/insert-tail.png" alt="image-20220329080948444" style="zoom:60%;" />
      <p style="font-size: 12px; font-weight: bold">图3：链表结尾插入新结点</p>
    </div>

   关键点就在于：**如何找到尾结点**。其实非常的简单，一个链表中什么样的结点是尾结点呢？有什么样的特征呢？那就是<span style="color: red">**链表结点的指针域指向 null 的结点便是尾结点**</span>。所以，只需要从表头开始，一步一步地往下循环查找，一直查找到某个结点的指针指向 null 停止。

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

6. 删除指定结点

   **参照前面的链表基础操作，作为思考题。**

   具体的讲解放在了第 3 小节课后习题中。

7. 在指定结点前插入新结点

   **参照前面的链表基础操作，作为思考题。**

   具体的讲解放在了第 3 小节课后习题中。

### 2.4 用链表实现栈和队列

前面我们用数组（顺序表）实现了栈和队列，这里我们用链表同样可以实现。

> 用链表实现栈相比较队列要简单一些，因此先实现栈

1. 用链表实现栈

   实现 LIFO 的 API。

   ```js
   class StackByLink {
     link = null; // 其实这里也同样应该设置为私有属性的，但为了展示，这里就仍然使用普通属性
     #size = 0; // ES2022 正式为 class 添加了私有属性，方法是在属性名之前使用 # 表示。

     push(value) {
       this.#size += 1;
       this.link = new Node(value, this.link);
     }

     pop() {
       if (this.#size !== 0) {
         this.#size -= 1;
         const value = this.link.value;
         this.link = this.link.next;
         return value;
       }
       return null;
     }

     size() {
       return this.#size;
     }

     isEmpty() {
       return !this.#size;
     }
   }
   ```

   :::tip
   ES2022 正式为 class 添加了私有属性，方法是在属性名之前使用 # 表示。点击查看详情：
   [提案](https://github.com/tc39/proposal-class-fields), [ES6](https://es6.ruanyifeng.com/#docs/class#%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95%E5%92%8C%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7)
   :::

2. 用链表实现队列

   同样实现 FIFO 的 API。

   ```js
   class QueueByLink {
     link = null;
     #last = null;
     #size = 0;

     enqueuq(value) {
       // 链尾添加
       if (this.#size === 0) {
         this.#last = new Node(value, null);
         this.link = this.#last;
       } else {
         const oldLast = this.#last;
         this.#last = new Node(value, null);
         oldLast.next = this.#last;
       }
       this.#size += 1;
     }

     dequeuq() {
       // 链头删除
       if (this.#size !== 0) {
         this.#size -= 1;
         const value = this.link.value;
         this.link = this.link.next;
         return value;
       }
       return null;
     }

     size() {
       return this.#size;
     }

     isEmpty() {
       return !this.#size;
     }
   }
   ```

### 2.5. 小结

数组：顺序存储，数组中是元素

链表：链式存储，链表中是结点

## 3. 课后习题

## 4. leetcode 题目
