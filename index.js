import createNode from "./node.js";

const node1 = createNode(2,null,3);
node1.setLeftChild(node1,1);
const node2 = createNode(4,node1,null);
console.log(`node1 value ${node1.value}`);
console.log(`node1.left value ${node1.left}`);
console.log(`node1.right value ${node1.right}`);

console.log(`node2 value ${node2.value}`);
console.log(`node2.left value ${node2.left.value}`);