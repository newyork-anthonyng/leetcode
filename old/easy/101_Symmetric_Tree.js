/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
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
var isSymmetric = function(root) {
	if(!root) {
		return true;
	}

	function check(left, right) {
		if(left === null && right === null) return true;
		if(left === null || right === null) return false;
		if(left.val === right.val) {
			return check(left.left, right.right) && check(right.left, left.right);
		}
		return false;
	}

	return check(root.left, root.right);
};


function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var n1 = new TreeNode(1);
var n2 = new TreeNode(2);
var n3 = new TreeNode(2);
var n4 = new TreeNode(3);
var n5 = new TreeNode(4);
var n6 = new TreeNode(4);
var n7 = new TreeNode(3);
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;

console.log(isSymmetric(n1));
