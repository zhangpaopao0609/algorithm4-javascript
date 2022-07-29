class Node {
  constructor(value = null, next = null) {
    this.value = value; // 元素
    this.next = next; // 指向另一条链表，另一个结点的值
  }
}

const first = new Node('1');
const second = new Node('2');
const third = new Node('3');

first.next = second;
second.next = third;

console.log(JSON.stringify(first, null, 2));
console.log('\n*******************************************************\n');

// {
//   "value": "1",
//   "next": {
//     "value": "2",
//     "next": {
//       "value": "3",
//       "next": null
//     }
//   }
// }

module.exports = {
  Node,
  link: first,
};
