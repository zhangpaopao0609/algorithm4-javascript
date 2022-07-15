# 基础

## 1. 数组

### 1.1 基础语法

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
   console.log(arr, cut); // [1, 4, 5] [4, 5]
   ```

### 1.2 背包、队列和栈

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

## 2. 二分查找

### 2.1 引导

思考一个问题，如何在一个**升序排列数组**中找到某个数的下标呢？

比如： `arr = [10, 11, 12, 16, 18, 23, 29, 33, 48, 54, 57, 68, 77, 84, 98]`，如何在这个数组中找到 48 的下标呢？

- 最简单的方法：从头到尾遍历这个数组

### 2.2 二分查找

之后我们会详细的讲解二分查找，这里只是简单的让大家初步感受一些算法的魅力。

<div align='center'>
  <img src="/assets/chapter-01/BinarySearch/01.png" alt="image-20220329080948444" style="zoom:50%;" />
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
     return BinarySearch(arr, 0, arr.length - 1, key);
   }

   const arr = [10, 11, 12, 16, 18, 23, 29, 33, 48, 54, 57, 68, 77, 84, 98];

   const res = main(arr, 48);
   console.log(res);
   ```

2. 迭代版本

   ```js
   function BinarySearch(arr, key) {
     let left = 0;
     let right = arr.length - 1;
     while (left <= right) {
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
     return BinarySearch(arr, key);
   }

   const arr = [10, 11, 12, 16, 18, 23, 29, 33, 48, 54, 57, 68, 77, 84, 98];

   const res = main(arr, 48);
   console.log(res);
   ```
