const { Node, link } = require('./01-node');
let first = link;

function insertNodeInTail(link, node) {
  let p = link;
  while (p.next !== null) {
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
