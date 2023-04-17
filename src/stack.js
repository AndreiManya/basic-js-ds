const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    if ( !this.stack.length ) {
      this.stack.push(element)
    } else {
     this.stack.push(element);
    }
    return this.stack;
  }

  pop() {
    if ( !this.stack.length ) {
      return;
    } else {
     return this.stack.pop();
    }
  }

  peek() {
    if ( !this.stack.length ) {
      return;
    } else {
     return this.stack[this.stack.length - 1];
    }
  }
}

module.exports = {
  Stack
};
