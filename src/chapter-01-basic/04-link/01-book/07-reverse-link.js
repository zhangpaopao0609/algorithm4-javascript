const { Node, link } = require('./01-node');
let first = link;

/**
 * 迭代，新结点
 * @param {*} link
 * @returns
 */
function reverse_v1(link) {
  let p = link;
  let reverse = null;
  while (p !== null) {
    const node = new Node(p.value, reverse);
    reverse = node;
    p = p.next;
  }

  return reverse;
}

/**
 * 迭代，结点无修改仅修改结点的指向
 * @param {*} link
 * @returns
 */
function reverse_v2(link) {
  let p = link;
  let reverse = null;

  while (p !== null) {
    const node = p;
    p = p.next;
    node.next = reverse;
    reverse = node;
  }

  return reverse;
}

/**
 * 递归版本
 * @param {*} link
 * @returns
 */
function reverse_v3(link) {
  if (link === null || link.next === null) {
    return link;
  }

  const reversed = reverse_v3(link.next);
  link.next.next = link;
  link.next = null;
  return reversed;
}

// const reversedLink = reverse_v1(first);
// console.log(JSON.stringify(reversedLink, null, 2));
// console.log(JSON.stringify(reverse_v2(first), null, 2));
// console.log(JSON.stringify(reverse_v3(first), null, 2));
