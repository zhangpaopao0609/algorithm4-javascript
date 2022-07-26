class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

// LIFO
class QueueByLink {
  constructor() {
    this.link = null;
    this.last = null;
    this._size = 0;
  }

  enqueuq(value) {
    // 链尾添加
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

  dequeuq() {
    // 链头删除
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

const q = new QueueByLink();
q.enqueuq(1);
q.enqueuq(2);
q.enqueuq(3);

console.log(q);

const qp = q.dequeuq();
console.log(qp);
console.log(q);
