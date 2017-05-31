/*
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/#/description
 *
 * Given a binary tree, find its maximum depth.
 *
 * The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 */

/*
 * Definition for a binary tree node
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// 🎉 Recursion to the rescue!
function maxDepth(root) {
  if (!root) return 0;

  if (!root.left && !root.right) return 1;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

/*
 * https://discuss.leetcode.com/topic/2157/is-the-iterative-solution-better-than-its-recursive-counterpart/2
 * Iterative solution from leetcode
 */
function alternativeSolution(root) {
  if (!root) return 0;

  const stack = [];
  /*
   * stackLength array keeps track of what "depth level" you are in.
   * It corresponds to each element in the stack array.
   */
  const stackLength = [];
  stack.push(root);
  stackLength.push(1);

  let max = 0;

  while (stack.length !== 0) {
    const current = stack.pop();
    const pathLength = stackLength.pop();
    max = Math.max(max, pathLength);
    if (current.right) {
      stack.push(current.right);
      stackLength.push(pathLength + 1);
    }
    if (current.left) {
      stack.push(current.left);
      stackLength.push(pathLength + 1);
    }
  }

  return max;
}

module.exports = {
  maxDepth,
  TreeNode,
  alternativeSolution,
};

/*
 * Lessons learned
 *
 * MySolution x 14,046,352 ops/sec ±1.70% (79 runs sampled)
 * Alternative Solution: Iterative Solution x 688,594 ops/sec ±2.91% (79 runs sampled)
 * Fastest is MySolution
 * 1939% faster
 *
 * In this instance, recursion was faster than the iterative solution.
 * You should be able to do a recursive implementation as a iterative implementation, and vice-versa.
 */
