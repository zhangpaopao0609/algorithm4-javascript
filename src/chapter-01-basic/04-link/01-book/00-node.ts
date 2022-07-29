class LinkNode {
  value: any;
  next: LinkNode | null;

  constructor(value: any = null, next: LinkNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

const first = new LinkNode('1');
const second = new LinkNode('2');

first.next = second;

console.log(JSON.stringify(first, null, 2));
console.log('\n*******************************************************\n');
