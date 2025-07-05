import Node from "./Node.js";

export default function LinkedList() {
  const linkedList = [];

  function append(value) {
    // adds a new node containing value to the end of the list
    linkedList.push(Node());
  }

  function prepend(value) {
    // adds a new node containing value to the start of the list
    linkedList.unshift(Node());
  }

  function size() {
    // returns the total number of nodes in the list
    return linkedList.length;
  }

  function head() {
    // returns the first node in the list
    return linkedList[0];
  }

  function tail() {
    // returns the last node in the list
    return linkedList[linkedList.length - 1];
  }

  function at(index) {
    // returns the node at the given index
    return linkedList[index];
  }

  function pop() {
    // removes the last element from the list
    linkedList.pop();
  }

  function contains(value) {
    // returns true if the passed in value is in the list and otherwise returns false
    return linkedList.contains(value);
  }

  function find(value) {
    // returns the index of the node containing value, or null if not found
    const index = linkedList.indexOf(value);
    if (index != -1) {
      return index;
    }
    return null;
  }

  function toString() {
    // represents your LinkedList objects as strings, so you can print them out and preview them in the console.
    // The format should be: ( value ) -> ( value ) -> ( value ) -> null
    let output = "";

    linkedList.forEach((node) => {
      output += `( ${node.value} ) -> `;
    });

    output += "null";
    return output;
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
