import createNode  from './node.js';

function createTree(array){
    array

    const root = buildTree(array);

    const insert = (value) => {
        let node = createNode(value);
        let current = root;
        let parent = null;
        while(current !== null){
            parent = current;
            if(value < current.value){
                current = current.left;
            } else {
                current = current.right;
            }
        }
        if(value < parent.value){
            parent.setLeftChild(node);
        } else {
            parent.setRightChild(node);
        }
    }

    function buildTree(array){
        let sortedArray = array.sort((a, b) => a - b);
        console.log(`tree.js - sortedArray: ${sortedArray}`);
        let uniqueArray = sortedArray.filter((value, index, self) => {
            return self.indexOf(value) === index;
        });

        console.log(`tree.js - uniqueArray: ${uniqueArray}`);
       
        let root = buildBinaryTree(uniqueArray, 0, uniqueArray.length - 1);
        return root;
    }

    function buildBinaryTree(array, start, end){
        if(start > end){
            return null;
        }
        let mid = Math.floor((start + end) / 2);
        let node = createNode(array[mid]);
        node.left = buildBinaryTree(array, start, mid - 1);
        node.right = buildBinaryTree(array, mid + 1, end);
        return node;
    }

    return {root, insert};
}

export default createTree;