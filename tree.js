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

    const deleteNode = (value) => {
        let current = root;
        let parent = null;
        ({ current, parent } = lookForValue(current, value, parent));
        if(current === null){
            return;
        }
        if(current.left === null && current.right === null){
            if(current.value < parent.value){
                parent.left = null;
            } else {
                parent.right = null;
            }
        } else if(current.left === null){
            if(current.value < parent.value){
                parent.left = current.right;
            } else {
                parent.right = current.right;
            }
        } else if(current.right === null){
            if(current.value < parent.value){
                parent.left = current.left;
            } else {
                parent.right = current.left;
            }
        } else {
            let rightSubTree = current.right;
            let succesor = current;
            while(rightSubTree.left !== null){
                succesor = rightSubTree;
                rightSubTree = rightSubTree.left;
            }
            deleteNode(rightSubTree.value);
            current.value = rightSubTree.value;
        }
    }

    const find = (value) => {
        let current = root;
        let parent = null;
        ({ current, parent } = lookForValue(current, value, parent));
        return current;
    }

    const levelOrder = () => {
        let queue = [];
        let result = [];
        queue.push(root);
        while(queue.length > 0){
            let current = queue.shift();
            result.push(current.value);
            if(current.left !== null){
                queue.push(current.left);
            }
            if(current.right !== null){
                queue.push(current.right);
            }
        }
        return result;
    }

    function lookForValue(current, value, parent) {
        while (current !== null && current.value !== value) {
            parent = current;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return { current, parent };
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

    return {root, insert, deleteNode, find};
}

export default createTree;