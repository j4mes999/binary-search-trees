function createNode(value, left, right) {
    value,
    left,
    right

    const setLeftChild = (node, left) => {
        node.left = left;
    }

    return {
        value,
        left,
        right,
        setLeftChild
    }
}

export default createNode;