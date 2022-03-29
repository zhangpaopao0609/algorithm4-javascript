// 栈 LIFO 后进先出
const arr = [0, 1];

arr.push(2) // 进到队尾
console.log(arr);

const b = arr.pop() // 在队尾弹出
console.log(b);

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

const s = new Stack();
s.push(1)
s.push(2)

console.log(s.pop());