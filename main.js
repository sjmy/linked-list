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
console.log(list.pop());

console.log(list.toString());
console.log(list.contains("cat"));
console.log(list.contains("human"));
console.log(list.find("dog"));

list.removeAt(3);
console.log(list.toString());

list.insertAt("blue jay", 3);
console.log(list.toString());
