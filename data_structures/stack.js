class Stack {
    constructor() {
        this.data = [];
    }

    push(val) {
        this.data.push(val);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}