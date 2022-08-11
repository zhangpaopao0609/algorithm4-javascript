// 编写一个方法 delete()，接收一个参数 k，删除链表的第 k 个元素，如果它存在的话
const { Node, link } = require('./00-node');
let first = link;

// function deleteKNode(link, k) {
//   if(link === null) throw Error('link is null');
//   if(k <= 0) throw Error('k should bgt 0');
//   if(k === 1) {
//     return link.next;
//   }
//   // 头结点
//   let curr = link;
//   // 循环 k - 2 次，因为要找的是第 k-1 个结点，所以循环 k-2 次就能找到  
//   for (let i = 1; i < k - 1; i++) {
//     curr = curr.next;
//     // 如果已经走到了尾结点
//     if(curr.next === null) return link;
//   }
//   // 删除第 k 个结点
//   curr.next = curr.next.next;

//   return link;
// }

// console.log(JSON.stringify(deleteKNode(first, 11), null, 2));

function deleteKNode_v2(link, k) {
  if(link === null) throw Error('link is null');
  if(k <= 0) throw Error('k should bgt 0');

  // 虚拟头结点
  let curr = new Node(null, link);
  // 循环 k - 1 次，因为要找的是第 k-1 个结点，所以循环 k-1 次就能找到  
  for (let i = 1; i < k - 1; i++) {
    curr = curr.next;
    // 如果已经走到了尾结点
    if(curr.next === null) return link;
  }
  // 删除第 k 个结点
  curr.next = curr.next.next;

  return link;
}

console.log(JSON.stringify(deleteKNode_v2(first, 11), null, 2));