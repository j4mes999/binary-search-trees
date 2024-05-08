import createTree from './tree.js';

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// const array = [7,5,3];
let tree = createTree(array);

tree.insert(6);
tree.insert(10);


tree.deleteNode(4);
prettyPrint(tree.root);

const node = tree.find(23);
console.log(`node: ${node.value}`);

//TODO test levelOrder method





//TODO Fix bug with delete node hard case
