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

function insertNodeAtHead(link, node) {
  node.next = link;
  return node;
}

const insert = new Node('insert', first);
first = insertNodeAtHead(first, insert);
console.log(JSON.stringify(first, null, 2));