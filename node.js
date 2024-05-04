function createNode(value, left, right) {
    value,
    left,
    right

    const setLeftChild = (node, left) => {
        node.left = left;
    }

    const setRightChild = (node, right) => {
        node.right = right;
    }

    return {
        value,
        left,
        right,
        setLeftChild,
        setRightChild
    }
}

export default createNode;