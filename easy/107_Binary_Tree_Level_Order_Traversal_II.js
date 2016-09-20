/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
	var queue = [
		{ node: root, level: 0 }
	];
	var stack = []
	var result = [];
	var current;

	if(!root) {
		return result;
	}

	while(queue.length > 0) {
		current = queue.shift();

		stack.push(current);

		if(current.node.right) {
			queue.push({
				node: current.node.right, level: current.level + 1
			});
		}

		if(current.node.left) {
			queue.push({
				node: current.node.left, level: current.level + 1
			});
		}
	}

	for(var i = 0; i < maxLevel; i++) {
		result.push([]);
	}

	while(stack.length > 0) {
		current = stack.pop();
		result[result.length - current.level - 1].push(current.node.val);
	}

	return result;
};

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var n1 = new TreeNode(3);
var n2 = new TreeNode(9);
var n3 = new TreeNode(20);
var n4 = new TreeNode(15);
var n5 = new TreeNode(7);
n1.left = n2;
n1.right = n3;
n3.left = n4;
n3.right = n5;

console.log(levelOrderBottom(n1));
