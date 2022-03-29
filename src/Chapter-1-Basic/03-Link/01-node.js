class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

const first = new Node('to');
const second = new Node('be');
const third = new Node('or');

first.next = second;
second.next = third;

console.log(JSON.stringify(first, null, 2));
console.log('-------------------------------------');

// Node {
//   node: 'to',
//   next: Node { 
//      node: 'be',
//      next: Node { 
//        node: 'or', 
//        next: null 
//      } 
//   }
// }
