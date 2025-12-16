import { Tree } from "./classes.js";

function randomOrderedArray(size = 15, max = 30) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

const numbers = randomOrderedArray();
console.log("Random numbers (<100):", numbers);
const sorted = numbers.sort((a, b) => a - b);
const sortedUnique = [...new Set(sorted)];
const tree = new Tree(sortedUnique);
tree.insert(40);
console.log(tree.root);
tree.delete(40);
console.log(tree.root);
tree.insert(31);
tree.print();
console.log(tree.find(50));
tree.print();
