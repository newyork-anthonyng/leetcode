function Node(key) {
	this.key = key;
	this.left = null;
	this.right = null;
}

function BinarySearchTree() {
	this.root = null;

	this.insert = function(value) {
		const newNode = new Node(value);
		if(this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	};

	this.insertNode = function(node, newNode) {
		if(node.key > newNode.key) {
			if(node.left === null) {
				node.left = newNode;
			} else {
				this.insertNode(node.left, newNode);
			}
		} else {
			if(node.right === null) {
				node.right = newNode;
			} else {
				this.insertNode(node.right, newNode);
			}
		}
	};
}

function maxDepth(root) {
	if(root === null) return 0;

	return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

function minDepth(root) {
	if(root === null) return 0;

	return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}

function isBalanced(tree) {
	return (maxDepth(tree.root) - minDepth(tree.root) <= 1);
}

//const tree = new BinarySearchTree();
//tree.insert(5);
//tree.insert(4);
//tree.insert(3);
//tree.insert(6);
//console.log(tree);
//console.log(isBalanced(tree));

function findRoute(graph, start, end) {
	// for all the nodes in the graph, set them to "Unvisited"

	// set the start node to be "Visiting"
	// add the start to the queue

	// while the queue is not empty
		// pop from queue
		// if something popped out
			// check if our destination is there
			// if it is, return true
			// if not, add all of the new nodes to the queue and set their state to visiting
		// after going through all the destination nodes, set the current state to visited
}
