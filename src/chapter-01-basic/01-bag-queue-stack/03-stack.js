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
