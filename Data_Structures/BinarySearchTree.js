function BinarySearchTree() {
	var Node = function(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	};

	var root = null;

	this.insert = function(key) {
		var newNode = new Node(key);

		if(root === null) {
			root = newNode;
		} else {
			insertNode(root, newNode);
		}
	};

	var insertNode = function(node, newNode) {
		if(newNode.key < node.key) {
			if(node.left === null) {
				node.left = newNode;
			} else {
				insertNode(node.left, newNode);
			}
		} else {
			if(node.right === null) {
				node.right = newNode;
			} else {
				insertNode(node.right, newNode);
			}
		}
	};

	this.inOrderTraverse = function(callback) {
		inOrderTraverseNode(root, callback);
	};

	var inOrderTraverseNode = function(node, callback) {
		if(node !== null) {
			inOrderTraverseNode(node.left, callback);
			callback(node.key);
			inOrderTraverseNode(node.right, callback);
		}
	};
}

var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.inOrderTraverse(function(value) {
	console.log(value);
});
