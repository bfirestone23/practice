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