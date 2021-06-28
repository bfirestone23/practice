class Queue {
    constructor() {
        this.data = [];
    }

    add(value) {
        this.data.unshift(value);
    }

    remove() {
        return this.data.pop();
    }
}