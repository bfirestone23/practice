// LINKED LISTS
const getName = (node) => {
    return node.name;
}

const headNode = (linkedList, collection) => {
    return collection[linkedList];
}

const next = (node, collection) => {
    let nextNode = node.next;
    return collection[nextNode];
}

const nodeAt = (index, linkedList, collection) => {
    let currentNode = headNode(linkedList, collection)

    for (let i = 0; i < index; i++) {
        currentNode = next(currentNode, collection);
    }

    return currentNode;
}

const addressAt = (address, linkedList, collection) => {
    debugger;
    if (address == 0) {
        return linkedList;
    } else {
        let node = nodeAt(address - 1, linkedList, collection)
        return node.next;
    }
}

const indexAt = (node, collection, linkedList) => {
    let currentNode = headNode(linkedList, collection);
    let currentIndex = 0;

    debugger;

    while (currentNode != node) {
        currentIndex++;
        currentNode = next(currentNode, collection);
    }

    return currentIndex;
}

const insertNodeAt = (index, newNodeAddress, linkedList, collection) => {
    let previousNode = nodeAt(index - 1, linkedList, collection);
    let subsequentNode = nodeAt(index, linkedList, collection);
    let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection);

    previousNode.next = newNodeAddress;
    let newNode = collection[newNodeAddress];
    newNode.next = subsequentNodeAddress;
}

const deleteNodeAt = (index, linkedList, collection) => {
    let previousNode
    let currentNode = headNode(linkedList, collection);

    for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = next(previousNode, collection)
    }

    previousNode.next = currentNode.next;
}

// TREES
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