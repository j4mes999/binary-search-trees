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
        while(current !== null && current.value !== value){
            parent = current;
            if(value < current.value){
                current = current.left;
            } else {
                current = current.right;
            }
        }
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
            console.log(`tree.js current: ${current.value}`);
            let rightSubTree = current.right;
            let succesor = current;
            while(rightSubTree.left !== null){
                succesor = rightSubTree;
                rightSubTree = rightSubTree.left;
            }
            succesor.left = null;
            current.value = rightSubTree.value;
            // while(rightSubTree.left !== null){
            //     nodeTobeDeleted = rightSubTree;
            //     rightSubTree = rightSubTree.left;
            // }
            // if(rightSubTree.value < nodeTobeDeleted.value){
            //     nodeTobeDeleted.left = null;
            // } else {
            //     nodeTobeDeleted.right = null;
            // }
            // current.value = rightSubTree.value;
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

    return {root, insert, deleteNode};
}

export default createTree;