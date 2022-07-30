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

  enqueuq(value) {
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
}

const q = new QueueByLink();
q.enqueuq(1);
q.enqueuq(2);
q.enqueuq(3);

console.log(q);

const qp = q.dequeuq();
console.log(qp);
console.log(q);
