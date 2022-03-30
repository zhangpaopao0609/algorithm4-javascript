class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

let first = new Node('1');
const second = new Node('2');
const third = new Node('3');

first.next = second;
second.next = third;

console.log(JSON.stringify(first, null, 2));
console.log('-------------------------------------');

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
