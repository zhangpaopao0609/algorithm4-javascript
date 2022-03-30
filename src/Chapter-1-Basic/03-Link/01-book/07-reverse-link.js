const { Node, link } = require('./01-node');
let first = link;

function reverse_v1(link) {
  let p = link;
  let reverse = null;
  while(p !== null) {
    const node = new Node(p.value, reverse);
    reverse = node;
    p = p.next
  }

  return reverse;
};

function reverse_v2(link) {
  let p = link;
  let reverse = null;

  while(p !== null) {
    const node = p;
    p = p.next; 
    node.next = reverse;
    reverse = node;
  }

  return reverse;
};

const reversedLink = reverse_v1(first);
console.log(JSON.stringify(reversedLink, null, 2));
console.log(JSON.stringify(reverse_v2(first), null, 2));