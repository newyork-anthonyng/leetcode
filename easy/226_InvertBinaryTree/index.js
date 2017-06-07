/*
 * https://leetcode.com/problems/invert-binary-tree/#/description
 *
 * Invert a binary tree
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function invertTree(root) {
  if (!root) return root;

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  if (root.left) invertTree(root.left);
  if (root.right) invertTree(root.right);

  return root;
}

// cleaner editorial solution, using recursion
// https://leetcode.com/articles/invert-binary-tree/
function cleanerSolution(root) {
  if (!root) return root;

  const right = cleanerSolution(root.right);
  const left = cleanerSolution(root.left);
  root.left = right;
  root.right = left;

  return root;
}

// iterative solution
function iterativeSolution(root) {
  if (!root) return root;

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const current = queue.shift();

    const temp = current.left;
    current.left = current.right;
    current.right = temp;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return root;
}


module.exports = {
  TreeNode,
  invertTree,
  cleanerSolution,
  iterativeSolution,
};

/*
 * Lessons learned
 *
 * MySolution x 11,511,870 ops/sec ±2.82% (77 runs sampled)
 * Alternative Solution: Cleaner recursive solution x 9,940,190 ops/sec ±2.51% (81 runs sampled)
 * Alternative Solution: Iterative Solution x 862,940 ops/sec ±1.29% (85 runs sampled)
 * Fastest is MySolution
 * 1234% faster
 *
 * Recursion is a lot faster!
 * I think the overhead from the Iterative solution comes from the Queue implementation.
 *
 * I think my solution was faster because it short-circuited with the if statement.
 * The cleaner solution always called the function to invert trees, even if the root was null.
 */
