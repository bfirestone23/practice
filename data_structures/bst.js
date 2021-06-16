// BINARY SEARCH TREE
const inOrder = (node) => {
    if (node.left) {
        inOrder(node.left);
    }
    console.log(node.data);
    if (node.right) {
        inOrder(node.right);
    }
}

const max = (node) => {
    if (node.right) {
        return max(node.right);
    } else {
        return node;
    }
}

const min = (node) => {
    if (node.left) {
        return min(node.left);
    } else {
        return node;
    }
}

const findOrAdd = (rootNode, newNode) => {
    if (rootNode.data == newNode.data) {
        return true;
    }

    if (newNode.data < rootNode.data) {
        if (rootNode.left) {
            return findOrAdd(rootNode.left, newNode);
        } else {
            return rootNode.left = newNode;
        }
    }

    if (newNode.data > rootNode.data) {
        if (rootNode.right) {
            return findOrAdd(rootNode.right, newNode);
        } else {
            return rootNode.right = newNode;
        }
    }
}

const maxDepth = (node, currentDepth) => {
    if (!node) {
        return currentDepth;
    }
    currentDepth++;
    return Math.max(maxDepth(node.left, currentDepth), maxDepth(node.right, currentDepth));
}

const levelOrder = (node, result=[]) => {
    if (!node) {
        return result;
    }
    if (!node.left && !node.right) {
        return result.push([node]);
    }

    

}