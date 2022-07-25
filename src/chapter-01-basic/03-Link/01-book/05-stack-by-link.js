class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

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

const s = new StackByLink();
s.push(1);
s.push(2);
s.push(3);

console.log(s);

const sp = s.pop();
console.log(sp);
console.log(s);
