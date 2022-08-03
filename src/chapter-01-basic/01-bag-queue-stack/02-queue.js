//-- 数组元素的队尾添加和队头弹出 -----------------
const arr = [0, 1];

arr.push(2); // 进到队尾
console.log(arr);

const b = arr.shift(); // 在队头弹出
console.log(b, arr);

//-- 用数组模拟队列 ------------------------------
// 用数组的 API 实现队列的 enqueue、dequeue、size、isEmpty 和 forEach
class Queue {
  #queue = [];

  enqueue(value) {
    // 进入队尾
    this.#queue.push(value);
  }

  dequeue() {
    // 离开队头
    return this.#queue.shift();
  }

  size() {
    return this.#queue.length;
  }

  isEmpty() {
    return !this.#queue.length;
  }

  forEach(cb) {
    typeof cb === 'function' && this.#queue.forEach(cb);
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.forEach((a) => console.log(a));

const e = q.dequeue();
console.log(q, e);
