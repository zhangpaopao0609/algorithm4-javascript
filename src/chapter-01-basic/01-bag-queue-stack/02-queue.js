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
