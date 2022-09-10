// 编写一个方法 delete()，接收一个参数 k，删除链表的第 k 个元素，如果它存在的话
const { link } = require('./00-node');
let first = link;

function deleteKNode(link, k) {
  if (link === null) throw Error('link is null');
  if (k <= 0) throw Error('k should ght 0');
  if (k === 1) return link.next;
  let curr = link;
  // 找到第 k-1 个结点，因此循环 k-2 次
  for (let i = 0; i < k - 2; i++) {
    curr = curr.next;
    if (curr.next === null) return link;
  }
  curr.next = curr.next.next;
  return link;
}

console.log(JSON.stringify(deleteKNode(first, 11), null, 2));
