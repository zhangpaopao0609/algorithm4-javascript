//-- 数组元素的队尾添加和队尾弹出 -----------------
const arr = [0, 1];

arr.push(2); // 进到队尾
console.log(arr);

const b = arr.pop(); // 在队尾弹出
console.log(b);

//-- 用数组模拟栈 ------------------------------
// 用数组的 API 实现栈的 push、pop、size、isEmpty 和 forEach
class Stack {
  #stack = [];

  push(value) {
    // 压栈（栈尾）
    this.#stack.push(value);
  }

  pop() {
    // 弹出（栈尾）
    return this.#stack.pop();
  }

  size() {
    return this.#stack.length;
  }

  isEmpty() {
    return !this.#stack.length;
  }

  forEach(cb) {
    typeof cb === 'function' && this.#stack.forEach(cb);
  }
}

const s = new Stack();
s.push(1);
s.push(2);
s.forEach((v) => console.log(v));

console.log(s.pop());
