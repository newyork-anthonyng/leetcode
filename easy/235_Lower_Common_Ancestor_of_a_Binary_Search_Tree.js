/*
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
	if(p.val < root.val && q.val < root.val) {
		return lowestCommonAncestor(root.left, p, q);
	} else if(p.val > root.val && q.val > root.val) {
		return lowestCommonAncestor(root.right, p, q);
	} else {
		return root;
	}
};
