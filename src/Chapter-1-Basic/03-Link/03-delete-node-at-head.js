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

function deleteNodeAtHead(link) {
  link.value = null;
  link = link.next;
}

deleteNodeAtHead(first);
console.log(JSON.stringify(first, null, 2));