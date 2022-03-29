class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

let first = new Node('to');
const second = new Node('be');
const third = new Node('or');

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

const insert = new Node('insertInTail');
insertNodeInTail(first, insert);
console.log(JSON.stringify(first, null, 2));