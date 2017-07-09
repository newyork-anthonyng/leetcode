/*
 * https://leetcode.com/problems/construct-string-from-binary-tree/#/description
 *
 * You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.
 *
 * The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree.
 */

function TreeNode(val) {
  this.val = val;

  this.left = this.right = null;
}

function tree2str(t) {
  if (!t) return '';

  if (!t.left && !t.right) {
    return `${t.val}`;
  }

  const rightOne = tree2str(t.right);
  const rightString = rightOne === '' ? '' : `(${rightOne})`;

  let result = `${t.val}(${tree2str(t.left)})${rightString}`;

  return result;
}

module.exports = {
  TreeNode,
  tree2str,
};
