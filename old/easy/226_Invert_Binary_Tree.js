/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
	if(root) {
		var temp = root.left;
		root.left = root.right;
		root.right = temp;

		invertTree(root.left);
		invertTree(root.right);
	}

	return root;
};

//var invertTree = function(root) {
//	// given solution
//	if(root === null) {
//		return null;
//	}
//
//	var left = invertTree(root.left);
//	var right = invertTree(root.right);
//	root.left = left;
//	root.right = right;
//
//	return root;
//};
