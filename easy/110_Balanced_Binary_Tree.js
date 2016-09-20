/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
	function treeSize(root) {
		if(root === null) return 0;

		return 1 + Math.max(treeSize(root.left), treeSize(root.right));
	}

	if(root === null) return true;
	var right = treeSize(root.right);
	var left = treeSize(root.left);
	var difference = Math.abs(right - left);
	var result = true;

	if(difference > 1) {
		result = false;
	}

	//return result && isBalanced(root.left) && isBalanced(root.right);
	return result;

	//return Math.abs(right - left) < 1;
};

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var n1 = new TreeNode(1);
var n2 = new TreeNode(2);
n1.left = n2;

console.log(isBalanced(n1));
