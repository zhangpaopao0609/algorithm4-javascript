class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

const first = new Node('1');
const second = new Node('2');
const third = new Node('3');
const four = new Node('4');
const five = new Node('5');

first.next = second;
second.next = third;
third.next = four;
four.next = five;

console.log(JSON.stringify(first, null, 2));
console.log('\n*******************************************************\n');

module.exports = {
  Node,
  link: first,
};
