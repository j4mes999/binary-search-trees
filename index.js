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
const tree = createTree(array);
console.log(`index.js - tree value: ${tree.root.value}`); 
console.log(`index.js - tree left value: ${tree.root.left.value}`);
console.log(`index.js - tree right value: ${tree.root.right.value}`);
prettyPrint(tree);
 
// tree.insert(6);
// prettyPrint(tree);

//fix error when executing this
