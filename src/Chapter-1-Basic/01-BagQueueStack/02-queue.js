// 队列 FIFO 先进先出
const arr = [0, 1];

arr.push(2); // 进到队尾
console.log(arr);

const b = arr.shift(); // 在队头弹出
console.log(b);

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

const q = new Queue();
q.enqueuq(1);
q.enqueuq(2);

console.log(q);

const e = q.enqueuq();
console.log(e);
