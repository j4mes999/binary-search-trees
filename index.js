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
//prettyPrint(tree.root);
 
tree.insert(6);
// console.log(`index.js tree root ${tree.root.value}`);
// console.log(`index.js tree root right ${tree.root.right.value}`);
// console.log(`index.js tree root right left ${tree.root.right.left.value}`);
tree.insert(10);
prettyPrint(tree.root);

//TODO continue building the methods mentioned in the description
