const bag = new Map();

bag.set('key', 2);

console.log(bag);
console.log(bag.size);

// 模拟背包
class Bag {
  constructor() {
    this.bag = new Map();
  }

  add(key, value) {
    this.bag.set(key, value);
  }

  size() {
    return this.bag.size;
  }

  isEmpty() {
    return !this.bag.size;
  }
}

const b = new Bag();
b.add(1, 2);

console.log(b, b.size(), b.isEmpty());
