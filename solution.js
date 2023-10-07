const { nums, words } = require("./data/data.js");
const { inspect } = require("util");


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }

  size() {
    let count = 0;
    let node = this.top;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  isEmpty() {
    return this.top === null;
  }

  findMin() {
    let min = Infinity;
    let node = this.top;
    while (node) {
      if (node.data < min) {
        min = node.data;
      }
      node = node.next;
    }
    return min;
  }

  peek() {
    if (this.top == null) {
      return null;
    }
    return this.top;
  }

  pop() {
    if (this.top == null) {
      return null;
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }

  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  sort() {
    const maxStack = new Stack();
    while (!this.isEmpty()) {
      let temp = this.pop();
      while (!maxStack.isEmpty() && maxStack.peek().data > temp.data) {
        this.push(maxStack.pop().data);
      }
      maxStack.push(temp.data);
    }
    while (!maxStack.isEmpty()) {
      this.push(maxStack.pop().data);
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = -Infinity;
  }

  count() {
    return this.size;
  }

  dequeue() {
    if (this.first == null) {
      throw new Error("the queue is empty");
    }
    const item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    2, 3;
    this.size--;
    return item.data;
  }

  enqueue(data) {
    const newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    if (newItem.data > this.max) {
      this.max = newItem.data;
    }
    return ++this.size;
  }

  findMax() {
    return this.max;
  }

  isEmpty() {
    return this.first === null;
  }

  getLast() {
    return this.last;
  }

  peek() {
    return this.first !== null ? this.first : null;
  }
}


module.exports = {
  Node,
  Queue,
  Stack,
};
