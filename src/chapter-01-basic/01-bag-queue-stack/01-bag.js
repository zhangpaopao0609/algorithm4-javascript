//-- 尝试 Set ------------------------------------------------
// const s = new Set();

// s.add(1);
// console.log(s);
// s.add(2);
// s.forEach((v) => console.log(v));
// s.delete(2);
// console.log(s.size);

//-- 使用 Set 模拟背包 ------------------------------------------
// class Bag {
//   // ES2022 正式为 class 添加了私有属性，方法是在属性名之前使用 # 表示。
//   #bag = new Set();

//   add(value) {
//     this.#bag.add(value);
//   }

//   size() {
//     return this.#bag.size;
//   }

//   isEmpty() {
//     return !this.#bag.size;
//   }

//   forEach(cb) {
//     this.#bag.forEach(cb);
//   }
// }

// const b = new Bag();
// b.add('test');
// b.forEach((v) => console.log(v));
// console.log(b, b.size(), b.isEmpty());

// Set 本身已经拥有 add, forEach 方法，因此，仅需要实现 size 和 isEmpty 方法即可
class Bag extends Set {
  size() {
    return this.size;
  }

  isEmpty() {
    return !this.size;
  }

  delete() {
    // 标准的背包是不能对元素进行删除的，但是 Set 提供了 delete 方法，因此需要拦截一下
    return;
  }
}

const b = new Bag();
b.add('test');
b.forEach((v) => console.log(v));
console.log(b, b.size(), b.isEmpty());
