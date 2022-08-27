class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

// LIFO
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

  forEach(cb) {
    if (typeof cb === 'function') {
      let p = this.link;
      while (p !== null) {
        cb(p.value);
        p = p.next;
      }
    }
  }
}

const s = new StackByLink();
s.push(1);
s.push(2);
s.push(3);

console.log('s', s);
s.forEach((value) => console.log(value));

const sp = s.pop();
console.log('sp', sp);
console.log('s', s);
