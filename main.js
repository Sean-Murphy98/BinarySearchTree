import { Tree } from "./classes.js";

function randomOrderedArray(size = 15, max = 100) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

const numbers = randomOrderedArray();
console.log("Random numbers (<100):", numbers);
const sorted = numbers.sort((a, b) => a - b);
const sortedUnique = [...new Set(sorted)];
const tree = new Tree(sortedUnique);
tree.print();
console.log(tree.isBalanced());
console.log("Printing level Order:");
tree.levelOrderForEach((node) => console.log(node.data));

console.log("Printing pre Order:");
tree.preOrderForEach((node) => console.log(node.data));

console.log("Printing in Order:");
tree.inOrderForEach((node) => console.log(node.data));

console.log("Printing post Order:");
tree.postOrderForEach((node) => console.log(node.data));

tree.insert(199);
tree.insert(400);
tree.insert(300);
tree.print();
console.log(tree.isBalanced());
tree.rebalance();
console.log(tree.isBalanced());
tree.print();
console.log("Printing level Order:");
tree.levelOrderForEach((node) => console.log(node.data));

console.log("Printing pre Order:");
tree.preOrderForEach((node) => console.log(node.data));

console.log("Printing in Order:");
tree.inOrderForEach((node) => console.log(node.data));

console.log("Printing post Order:");
tree.postOrderForEach((node) => console.log(node.data));
