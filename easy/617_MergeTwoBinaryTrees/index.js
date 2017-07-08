/*
 * https://leetcode.com/problems/merge-two-binary-trees/#/description
 *
 * Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.
 *
 * You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function mergeTrees(t1, t2) {
  if (t1 === null && t2 === null) return null;

  let newNode;
  if (t1 === null || t2 === null) {
    const nonNullNode = t1 || t2;
    newNode = new TreeNode(nonNullNode.val);
    newNode.left = mergeTrees(nonNullNode.left, null);
    newNode.right = mergeTrees(nonNullNode.right, null);

    return newNode;
  }

  newNode = new TreeNode(t1.val + t2.val);
  newNode.left = mergeTrees(t1.left, t2.left);
  newNode.right = mergeTrees(t1.right, t2.right);
  return newNode;
};

function alternativeSolution(t1, t2) {
  if (!t1 && !t2) return null;

  const newNode = new TreeNode(((t1 && t1.val) || 0) + (t2 && t2.val) || 0);
  newNode.left = alternativeSolution(t1 && t1.left, t2 && t2.left);
  newNode.right = alternativeSolution(t1 && t1.right, t2 && t2.right);

  return newNode;
}

module.exports = {
  TreeNode,
  mergeTrees,
  alternativeSolution,
};

/*
 * Lessons learned
 *
 * MyAnswer x 6,898,656 ops/sec ±1.07% (84 runs sampled)
 * Alternative Solution x 2,851,671 ops/sec ±1.21% (80 runs sampled)
 * Fastest is MyAnswer
 * 141% faster
 *
 * Why the speed boost?
 *
 * 1.
 * Checking for null directly is faster than checking for a falsey value.
 * https://jsperf.com/check-for-null
 *
 * 2.
 * There's more complicated logic inside each iteration of the alternativeSolution.
 * The if/else statement in our code kept the work lighter.
 */
