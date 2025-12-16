class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

export class Tree {
  constructor(sorted) {
    this.root = this.buildTree(sorted);
  }
  buildTree(arr) {
    return buildTreeRecur(arr, 0, arr.length - 1);
  }
  print() {
    prettyPrint(this.root);
  }
  insert(value, node = this.root) {
    if (node === null) return new Node(value);
    if (node.data === value) return node;
    if (value < node.data) {
      node.left = this.insert(value, node.left);
    } else {
      node.right = this.insert(value, node.right);
    }

    return node;
  }
  delete(value, node = this.root) {
    if (node === null) {
      return node;
    }
    if (node.data > value) {
      node.left = this.delete(value, node.left);
    } else if (node.data < value) {
      node.right = this.delete(value, node.right);
    } else {
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }
      const succ = getSuccessor(node);
      node.data = succ.data;
      node.right = this.delete(node.right, succ.data);
    }
    return node;
  }
  find(value, node = this.root) {
    if (node === null) return null;
    if (value === node.data) return node;
    let ans = null;
    if (value < node.data) {
      ans = this.find(value, node.left);
    } else {
      ans = this.find(value, node.right);
    }
    return ans;
  }
  levelOrderForEach(callback) {
    if (root === null) return;
    let q = [];
    q.push(this.root);
    let current = null;
    while (q.length > 0) {
      current = q[0];
      if (current.left !== null) q.push(current.left);
      if (current.right !== null) q.push(current.right);
      callback(q);
      q.shift();
    }
  }
}

function buildTreeRecur(arr, start, end) {
  if (start > end) return null;

  let mid = start + Math.floor((end - start) / 2);
  let root = new Node(arr[mid]);

  // Divide from middle element
  root.left = buildTreeRecur(arr, start, mid - 1);
  root.right = buildTreeRecur(arr, mid + 1, end);

  return root;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

function getSuccessor(curr) {
  curr = curr.right;
  while (curr !== null && curr.left !== null) curr = curr.left;
  return curr;
}
