import createNode  from './node.js';

function createTree(array){
    array

    const root = buildTree(array);

    const insert = (value) => {
        let node = createNode(value,null,null);
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
            parent.left = node;
        } else {
            parent.right = node;
        }
    }

    function buildTree(array){
        let sortedArray = array.sort((a, b) => a - b);
        let uniqueArray = sortedArray.filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
       
        let root = buildBinaryTree(uniqueArray, 0, uniqueArray.length - 1);
        return root;
    }

    function buildBinaryTree(array, start, end){
        if(start > end){
            return null;
        }
        let mid = Math.floor((start + end) / 2);
        let node = createNode(array[mid],null,null);
        node.left = buildBinaryTree(array, start, mid - 1);
        node.right = buildBinaryTree(array, mid + 1, end);
        return node;
    }

    return {root, insert};
}

export default createTree;