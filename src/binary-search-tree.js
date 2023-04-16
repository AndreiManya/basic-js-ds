const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    this.tree = addWithin(this.tree, data);
    function addWithin(node, data) {
      if ( !node ) {
        return new Node(data);
      }

      if( node.data === data ) {
        return node;
      }

      if ( data < node.data ) {
        node.left = addWithin(node.left, data);
      } else { 
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasValue(this.tree, data);
    function hasValue(node, data) {
      if ( !node ) {
        return false
      }
  
      if ( node.data === data ) {
        return true
      }

      if ( data < node.data ) {
        return hasValue(node.left, data);
      } else { 
        return hasValue(node.right, data);
      }
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    return removeNode(this.tree, data);
    function removeNode(node, data) {
      if ( !node ) {
        return null
      }
  
      if ( data < node.data ) {
        node.left = removeNode(node.left, data);
        return node;
      } else if ( data > node.data ) { 
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if ( !node.left && !node.right ) {
          return null;
        }

        if ( !node.left ) {
          node = node.right
          return node;
        }
        if ( !node.right ) {
          node = node.left
          return node;
        }

        let maxValueRight = node.right;
        while (maxValueRight.left) {
            maxValueRight = maxValueRight.left;
        }
        node.data = maxValueRight.data;

        node.right = removeNode(node.right, maxValueRight.data);

        return node;
      }
    }
  }

  min() {
    if ( !this.tree) {
      return;
    }

    let node = this.tree;
    while (node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    if ( !this.tree) {
      return;
    }

    let node = this.tree;
    while (node.right) {
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};