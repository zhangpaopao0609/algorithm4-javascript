class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

// FIFO
class QueueByLink {
  link = null;
  #last = null;
  #size = 0;

  enqueue(value) {
    // 链尾添加
    if (this.#size === 0) {
      this.#last = new Node(value, null);
      this.link = this.#last;
    } else {
      const oldLast = this.#last;
      this.#last = new Node(value, null);
      oldLast.next = this.#last;
    }
    this.#size += 1;
  }

  dequeuq() {
    // 链头删除
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

const q = new QueueByLink();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q);
q.forEach((value) => console.log(value));

const qp = q.dequeuq();
console.log(qp);
console.log(q);
