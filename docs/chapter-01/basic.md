---
page: true
title: 基础
outline: deep
---

# 基础 {#basic}

## 1. 数组 {#array}

1. 创建并初始化数组

   ```js
   const arr = [1, 2, 3];

   const arr = [];
   arr[0] = 1;
   arr[1] = 2;

   const arr = Array.of(3, 11, 8); // [3, 11, 8]
   const arr = Array(4).fill(7); // [7, 7, 7, 7]
   ```

2. 数组的基本属性和方法

   ```js
   const len = arr.length;

   const arrNew = arr1.concat(arr2);

   const arrNew = arr1.join('xxxx');

   const arrNew = arr1.slice(index, count);

   arr1.splice(index, count, ...args);
   const arr = [1, 2, 3];
   const cut = arr.splice(1, 2, 4, 5);
   console.log(arr, cut); // [1, 4, 5] [2, 3]
   ```

## 2. 背包、队列和栈 {#bag-queue-stack}

三种基础且重要的数据类型：背包(Bag)、队列(Queue)和栈(Stack)。

这三种数据类型都非常的经典，是很多算法的基础。

在其他语言中，比如 java，语言就提供这些基础类型对应的类，可以直接创建，比如 Stack, java 中可直接 `new Stack<T>()` 创建，但是 javascript 中并没有内置这些类，但我们可以用 js 中已用的数据类型来模拟。

> ES6 引入了 `Map、Set`, 从某种角度上说，它弥补了一些，但并不是真正意义上的 Bag, Queue, Stack

:::tip
书中有泛型的概念，本次教程不涉及此内容，不影响算法的学习。
如果你了解 ts, 那么泛型一定不会陌生。
:::

### 2.1. 背包 {#bag}

1. 概念

   背包是一种不支持从中删除元素的集合数据类型，它的目的就是收集元素并可迭代遍历所有元素。其中，迭代的顺序与添加的顺序无关。

2. 背包的 API

   书中给出了背包的 API
   <div align='center'>
     <img src="/assets/chapter-01/basic/bag.png" style="zoom:80%;" />
   </div>

3. 使用 `Set` 模拟标准的背包

:::tip
这里提到的标准是指：以《算法 4》书中给出的概念和 API 为标准。
:::

`Set` 本身已经拥有 `add, forEach` 方法，因此，仅需要实现 `size` 和 `isEmpty` 方法即可

- 继承 `Set`
- 实现 `size` 和 `isEmpty`
- 拦截 `delete` 方法（因为标准的背包是不能对元素进行删除的，但是 Set 提供了 delete 方法，因此需要拦截一下）

  ```js
  //-- 尝试 Set ------------------------------------------------
  const s = new Set();

  s.add(1);
  console.log(s);
  s.add(2);
  s.forEach((v) => console.log(v));
  s.delete(2);
  console.log(s.size);

  //-- 使用 Set 模拟背包 -----------------------------------------
  // Set 本身已经拥有 add, forEach 方法，因此，仅需要实现 size 和 isEmpty 方法即可
  class Bag extends Set {
    size() {
      return this.size;
    }

    isEmpty() {
      return !this.size;
    }

    delete() {
      // 标准的背包是不能对元素进行删除的，但是 Set 提供了 delete 方法，因此需要拦截一下
      return;
    }
  }

  const b = new Bag();
  b.add('test');
  b.forEach((v) => console.log(v));
  console.log(b, b.size(), b.isEmpty());
  ```

  <!-- :::tip
  ES2022 正式为 class 添加了私有属性，方法是在属性名之前使用 # 表示。点击查看详情：
  [提案](https://github.com/tc39/proposal-class-fields), [ES6](https://es6.ruanyifeng.com/#docs/class#%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95%E5%92%8C%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7)
  ::: -->

### 2.2. 队列 —— FIFO {#fifo}

1. 概念

   先进先出队列（简称队列）是一种基于先进先出（FIFO）策略的集合类型。在应用程序中使用队列的主要原因是在用集合保存元素的同时**保存他们的相对顺序：使他们入列顺序和出列顺序相同**。

   > 生活中的排队就是典型的例子。任何服务型策略的基本原则就是公平，在提到公平是大多数人的第一个想法就是应该优先服务等待最久的人，这也正是先进先出策略的准则。

2. 队列的 API
<div align='center'>
  <img src="/assets/chapter-01/basic/queue.png" style="zoom:80%;" />
</div>

3. 使用数组模拟标准队列

   利用 `Array` 来实现队列

   - 继承 `Array`
   - 实现 `enqueue`、`dequeue`、`isEmpty` 和 `size()` 方法

   ```js
   //-- 数组元素的队尾添加和队头弹出 -----------------
   const arr = [0, 1];

   arr.push(2); // 进到队尾
   console.log(arr);

   const b = arr.shift(); // 在队头弹出
   console.log(b, arr);

   //-- 用数组模拟队列 ------------------------------
   class Queue extends Array {
     enqueuq(value) {
       this.push(value);
     }

     dequeue() {
       return this.shift();
     }

     size() {
       return this.length;
     }

     isEmpty() {
       return !this.length;
     }
   }

   const q = new Queue();
   q.enqueuq(1);
   q.enqueuq(2);
   q.forEach((a) => console.log(a));

   const e = q.dequeue();
   console.log(q, e);
   ```

### 2.3. 栈 —— LIFO {#lifo}

1. 概念

   下压栈（简称栈）是一种基于后进先出（LIFO）策略的集合类型。在应用程序中使用栈迭代器的一个典型原因是在用集合保存元素的同时颠倒它们的相对顺序。

   > 生活中也有非常多的例子：比如新邮件会在最前面出现、叠在一起的重物会先拿最上面的、浏览器访问时页面的回退机制。<br>
   > 这种策略的好处就是我们能够及时的获取到最新的消息，但是坏处就是如果不把栈清空，较早的信息就一直不会获取到。

2. 栈的 API
<div align='center'>
  <img src="/chapter-01/basic/stack.png" style="zoom:80%;" />
</div>

3. 使用数组模拟标准栈

   利用 `Array` 来实现栈, `Array` 本身已经拥有 `push, pop` 方法，因此，仅需要实现 `isEmpty` 和 `size` 方法即可

   - 继承 `Array`
   - 实现 `isEmpty` 和 `size()` 方法

   ```js
   //-- 数组元素的队尾添加和队尾弹出 -----------------
   const arr = [0, 1];

   arr.push(2); // 进到队尾
   console.log(arr);

   const b = arr.pop(); // 在队尾弹出
   console.log(b);

   //-- 用数组模拟栈 ------------------------------
   class Stack extends Array {
     size() {
       return this.length;
     }

     isEmpty() {
       return !this.length;
     }
   }

   const s = new Stack();
   s.push(1);
   s.push(2);
   s.forEach((v) => console.log(v));

   console.log(s.pop());
   ```
