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
console.log('\n************************************************************\n');

function insertNodeInTail(link, node) {
  let p = link;
  while(p.next !== null) {
    p = p.next;
  }
  p.next = node;
}

const insert = new Node('4');
insertNodeInTail(first, insert);
console.log(JSON.stringify(first, null, 2));

// {
//   "value": "1",
//   "next": {
//     "value": "2",
//     "next": {
//       "value": "3",
//       "next": {
//         "value": "4",
//         "next": null
//       }
//     }
//   }
// }