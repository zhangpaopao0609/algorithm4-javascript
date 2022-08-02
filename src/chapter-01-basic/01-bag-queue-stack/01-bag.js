//-- 尝试 Map ------------------------------------------------
// const m = new Map();

// m.set('key1', 'value1');
// console.log(m);

// m.set('key2', 'value2');
// m.forEach((v) => console.log(v));

// m.delete('key2');
// console.log(m.size);

//-- 使用 Map 模拟背包 ------------------------------------------
// 利用 Map 的 API 实现 add、isEmpty、size 和 forEach 方法
class Bag {
  #bag = new Map(); // ES2022 正式为 class 添加了私有属性，方法是在属性名之前使用 # 表示。

  add(item) {
    // 这里为什么要用 Symbol, 第一点：Map 需要唯一的 key(不唯一就覆盖了)；第二点：背包并不需要 key，所以不能让外部感知到 key
    const key = Symbol();
    this.#bag.set(key, item);
  }

  size() {
    return this.#bag.size;
  }

  isEmpty() {
    return !this.#bag.size;
  }

  forEach(cb) {
    typeof cb === 'function' && this.#bag.forEach((v) => cb(v)); // 这里为什么我要再写一个箭头函数呢？原因很简单，因为 map 的 forEach 是支持两个参数的(value, key)，但是背包不需要，所以过滤一下
  }
}

const b = new Bag();
b.add(0);
b.add(1);
b.forEach((v) => console.log(v));
console.log(b.size(), b.isEmpty());

// class Bag {
//   #size=0;
//   #bag = {};

//   add(item) {
//     // 这里为什么要用 Symbol, 第一点：每次存储时对象需要 key (并且模拟背包需要 key 唯一，不唯一就覆盖了)；第二点：背包并不需要 key，所以不能让外部感知到 key
//     const key = Symbol();
//     this.#bag[key] = item;
//     this.#size++;
//   }

//   size() {
//     return this.#size;
//   }

//   isEmpty() {
//     return !this.#size;
//   }

//   forEach(cb) {
//     typeof cb === 'function' &&
//     Object.getOwnPropertySymbols(this.#bag).forEach(item => cb(this.#bag[item]))
//   }
// }

// const b = new Bag();
// b.add(0);
// b.add(1);

// b.forEach((v) => console.log(v));
// console.log(b.size(), b.isEmpty());
