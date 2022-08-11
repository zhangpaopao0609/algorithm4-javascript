const { Node, link } = require('./01-node');
let first = link;

function deleteNodeAtHead(link) {
  link.value = null;
  return link.next;
}

first = deleteNodeAtHead(first);
console.log(JSON.stringify(first, null, 2));
// {
//   "value": "2",
//   "next": {
//     "value": "3",
//     "next": null
//   }
// }
