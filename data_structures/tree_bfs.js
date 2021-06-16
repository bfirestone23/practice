const bfs = (root) => {
    let currentNode = root;
    let result = [];
    let queue = [];
    queue.push(currentNode)

    while (queue.length) {
        currentNode = queue.shift();
        list.push(currentNode);
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }
    return result;
}