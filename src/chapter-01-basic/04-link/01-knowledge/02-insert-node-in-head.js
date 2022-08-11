const { Node, link } = require('./01-node');
let first = link;

function insertNodeAtHead(link, node) {
  node.next = link;
  return node;
}

const insert = new Node('0', null);
first = insertNodeAtHead(first, insert);
console.log(JSON.stringify(first, null, 2));

// {
//   "value": "0",
//   "next": {
//     "value": "1",
//     "next": {
//       "value": "2",
//       "next": {
//         "value": "3",
//         "next": null
//       }
//     }
//   }
// }
