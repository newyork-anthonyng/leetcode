/*
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst/#/description
 * Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function getMinimumDifference(root) {
  let previous = null;
  let difference = Infinity;

  function inOrder(root) {
    if (!root) return;

    inOrder(root.left);

    if (previous && (difference > Math.abs(previous - root.val))) {
      difference = Math.abs(previous - root.val);
    }

    previous = root.val;
    inOrder(root.right);
  }

  inOrder(root);
  return difference;
}

module.exports = {
  TreeNode,
  getMinimumDifference,
};
