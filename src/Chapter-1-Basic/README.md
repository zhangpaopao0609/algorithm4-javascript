# 第一章 基础

## 1. 前言
第一章介绍了一些基础的知识，为后续的章节做铺垫。
那本次课程从第一章中挑选了一些重点的小节来跟大家分享，具体如下：

1. 数组 —— 基础知识
   - 基础语法
   - 背包、队列和栈
2. 二分查找 —— 算法的初步感受
   - 算法的初步学习
   - leetcode 题目
3. 链表 —— 算法的基础
   - 链表
   - leetcode 题目

## 2. 数组

### 2.1 基础语法

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
   const len = arr.length
   
   const arrNew = arr1.concat(arr2)
   
   const arrNew = arr1.join('xxxx')
   
   const arrNew = arr1.slice(index, count) 
   
   arr1.splice(index, count, ...args)
   const arr = [1, 2, 3]
   const cut = arr.splice(1, 2, 4, 5)
   console.log(arr, cut);	// [1, 4, 5] [4, 5]
   ```


### 2.2 背包、队列和栈

1. map 存储

   ```js
   // 模拟背包
   class Bag {
     constructor() {
       this.bag = new Map();
     }
   
     add(key, value) {
       this.bag.set(key, value);
     }
   
     size() {
       return this.bag.size;
     }
   
     isEmpty() {
       return !this.bag.size;
     }
   }
   ```

2. 先进先出 —— FIFO

    ```js
    // 模拟队列
    class Queue {
      constructor() {
        this.queue = [];
      }
    
      enqueuq(value) {
        return this.queue.push(value);
      }
    
      dequeue() {
        return this.queue.shift();
      }
    
      size() {
        return this.queue.length;
      }
    
      isEmpty() {
        return !this.queue.length;
      }
    }
    ```



  3. 后进先出 —— LIFO

      ```js
      // 模拟栈
      class Stack {
        constructor() {
          this.stack = [];
        }
      
        push(value) {
          return this.stack.push(value);
        }
      
        pop() {
          return this.stack.pop();
        }
      
        size() {
          return this.stack.length;
        }
      
        isEmpty() {
          return !this.stack.length;
        }
      }
      ```



## 3. 二分查找

### 3.1 引导

思考一个问题，如何在一个**升序排列数组**中找到某个数的下标呢？

比如： `arr = [10, 11, 12, 16, 18, 23, 29, 33, 48, 54, 57, 68, 77, 84, 98]`，如何在这个数组中找到 48 的下标呢？

- 最简单的方法：从头到尾遍历这个数组

### 3.2 二分查找

之后我们会详细的讲解二分查找，这里只是简单的让大家初步感受一些算法的魅力。

<div align='center'>
  <img src="./img/BinarySearch/01.png" alt="image-20220329080948444" style="zoom:50%;" />
</div>

算法的每次循环都会将查找的范围缩小一半。

- 如果被查找的键等于 `arr[mid]`
- 如果被查找的键大于 `arr[mid]`，那么说明这个键一定在 `arr[mid]` 的右边，这样就将范围缩小一半了
- 同样，如果被查找的键小于 `arr[mid]`，那么说明这个键一定在 `arr[mid]` 的左边

1. 递归版本

   ```js
   function BinarySearch(arr, left, right, key) {
     if (left < right) return -1;
     const mid = left + ((right - left) >> 1);
     const now = arr[mid];
     if (now > key) {
       return BinarySearch(arr, left, mid - 1, key);
     } else if (now < key) {
       return BinarySearch(arr, mid + 1, right, key);
     } else {
       return mid;
     }
   }
   
   function main(arr, key) {
     return BinarySearch(arr, 0, arr.length - 1, key)
   };
   
   const arr = [10, 11, 12, 16, 18, 23, 29, 33, 48, 54, 57, 68, 77, 84, 98];
   
   const res = main(arr, 48);
   console.log(res);
   ```

2. 迭代版本

   ```js
   function BinarySearch(arr, key) {
     let left = 0;
     let right = arr.length - 1;
     while(left <= right) {
       const mid = left + ((right - left) >> 1);
       const now = arr[mid];
       if (now > key) {
         right = mid - 1;
       } else if (now < key) {
         left = mid + 1;
       } else {
         return mid;
       }
     }
     return -1;
   }
   
   function main(arr, key) {
     return BinarySearch(arr, key)
   };
   
   const arr = [10, 11, 12, 16, 18, 23, 29, 33, 48, 54, 57, 68, 77, 84, 98];
   
   const res = main(arr, 48);
   console.log(res);
   ```



## 3. 链表

定义：链表是一种递归的数据结构，它或者为空（null），或者指向一个节点（node）的引用，**该节点含有一个泛型的<font color=red>元素</font>和一个<font color=red>指向另一条链表的引用</font>**。

> 泛型：任意类型数据

<div align='center'>
  <img src="./img/Link/node.png" alt="image-20220329080948444" style="zoom:30%;" />
</div>

<div align='center'>
  <img src="./img/Link/link.png" alt="image-20220329080948444" style="zoom:40%;" />
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
     while(p.next !== null) {
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
   
     enqueuq(value) {  // 链尾添加
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
   
     dequeuq() { // 链头删除
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

















