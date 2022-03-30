const { Node, link } = require('./00-node');
let first = link;

function reverseNM_v1(link, n, m) {
  if (n <= 0) throw Error('n should larger than 0')
  let before = null;
  for (let first = link, i = n - 1; i--; first = first.next) {
    before = first;
  }

  const start = before ? before.next : link;
  let reverse = null;
  let after = null;
  let last = null;

  for (let first = start, i = m - n + 1; i-- && first; first = first.next) {
    const node = new Node(first.value, reverse);
    if (!last) last = node;
    reverse = node;
    after = first.next;
  }
  
  before && (before.next = reverse);
  last.next = after;
  return before ? link : reverse;
};

function reverseNM_v2(link, n, m) {
  if (n <= 0) throw Error('n should larger than 0')
  let before = null;
  for (let first = link, i = n - 1; i--; first = first.next) {
    before = first;
  }

  const start = before ? before.next : link;
  let reverse = null;
  let after = null;
  let last = null;

  for (after = start, i = m - n + 1; i-- && after; null) {
    const node = after;
    after = after.next;
    node.next = reverse;
    reverse = node;
    if (!last) last = node;
  }
  
  before && (before.next = reverse);
  last.next = after;
  return before ? link : reverse;
};

// const r = reverseNM_v1(first, 2, 3);
// console.log(JSON.stringify(r, null, 2));
console.log(JSON.stringify(reverseNM_v2(first, 1, 3), null, 2));
console.log(JSON.stringify(first, null, 2));
