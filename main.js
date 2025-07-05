import LinkedList from "./LinkedList.js";

const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("hummingbird");

console.log(list.toString());
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(4));
list.pop();

console.log(list.toString());
// console.log(list.contains("cat"));
// console.log(list.contains("me"));
console.log(list.find("dog"));

// Issues: head() and tail() do not report the correct nextNode
// What is nextNode supposed to report? Value of the next node?
// contains() throws an error
// find() returns null even if the value is in the list
// Also, I am using existing array functions like pop, contains (name conflict?),
// push, unshift, indexOf. Should I be constructing the functions without using
// existing array functions?
