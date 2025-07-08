import Node from "./Node.js";

export default function LinkedList() {
  let nodeCount = 0;
  let headNode = null;
  let tailNode = null;

  // Adds a new node containing value to the end of the list
  function append(value = null) {
    if (headNode === null) {
      prepend(value);
    } else {
      const newNode = Node(value);
      let tmpHead = headNode;

      while (tmpHead.nextNode !== null) {
        tmpHead = tmpHead.nextNode;
      }

      nodeCount += 1;
      tmpHead.nextNode = newNode;
      tailNode = newNode;
    }
  }

  // Adds a new node containing value to the start of the list
  function prepend(value = null) {
    const newNode = Node(value);
    newNode.nextNode = headNode;
    headNode = newNode;
    nodeCount += 1;
  }

  // Returns the total number of nodes in the list
  function size() {
    return nodeCount;
  }

  // Returns the first node in the list
  function head() {
    return headNode;
  }

  // Returns the last node in the list
  function tail() {
    return tailNode;
  }

  // Returns the node at the given index
  function at(index) {
    if (index === 0 || headNode === null) {
      return headNode;
    }

    let tmpCount = 0;
    let tmpHead = headNode;

    while (tmpHead !== null) {
      tmpCount += 1;
      tmpHead = tmpHead.nextNode;

      if (tmpCount === index) {
        return tmpHead;
      }
    }

    return null;
  }

  // Removes the last element from the list
  function pop() {
    let tmpHead = headNode;

    while (tmpHead !== null) {
      if (tmpHead.nextNode === tailNode) {
        const poppedNode = tailNode;
        tailNode = tmpHead;
        tailNode.nextNode = null;
        return poppedNode;
      }

      tmpHead = tmpHead.nextNode;
    }
  }

  // Returns true if the passed in value is in the list and otherwise returns false
  function contains(value) {
    if (headNode.value === value) {
      return true;
    }

    let tmpHead = headNode;

    while (tmpHead !== tailNode) {
      tmpHead = tmpHead.nextNode;

      if (tmpHead.value === value) {
        return true;
      }
    }

    return false;
  }

  // Returns the index of the node containing value, or null if not found
  function find(value) {
    if (headNode.value === value) {
      return 0;
    }

    let tmpCount = 0;
    let tmpHead = headNode;

    while (tmpHead !== null) {
      tmpCount += 1;
      tmpHead = tmpHead.nextNode;

      if (tmpHead.value === value) {
        return tmpCount;
      }
    }

    return null;
  }

  // String representation. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  function toString() {
    let output = "";
    let tmpHead = headNode;

    if (headNode === null) {
      output += "null";
      return output;
    }

    while (tmpHead !== null) {
      output += `( ${tmpHead.value} ) -> `;

      if (tmpHead.nextNode === null) {
        output += "null";
        return output;
      }

      tmpHead = tmpHead.nextNode;
    }
  }

  // Extra credit
  function insertAt(value, index) {
    // that inserts a new node with the provided value at the given index
  }

  function removeAt(index) {
    // that removes the node at the given index
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  };
}
