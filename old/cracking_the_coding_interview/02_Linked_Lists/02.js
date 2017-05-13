function Node(value) {
	this.value = value;
	this.next = null;
}

function LinkedList() {
	this.head = null;
	this.length = 0;

	this.append = function(value) {
		const newNode = new Node(value);

		if(!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;

			while(current.next) {
				current = current.next;
			}
			current.next = newNode;
		}

		this.length++;
	}

	this.print = function() {
		let text = '';
		if(!this.head) {
			return console.log(text);
		}

		let current = this.head;
		while(current) {
			text += (current.value + ' -> ');
			current = current.next;
		}
		console.log(`${text} end (length: ${this.length})`);
	}
}

// Test out LinkedList
//let list = new LinkedList();
//console.log(list);
//list.append(1);
//console.log(list);
//list.append(2);
//console.log(list);

// remove duplicates from unsorted linked list
function removeDuplicates(list) {
	if(!list.head) return;

	let tracker = {};
	let current = list.head;
	let previous = current;

	while(current) {
		if(tracker[current.value]) {
			previous.next = current.next;
			current = previous.next;
		} else {
			tracker[current.value] = true;
			previous = current;
			current = current.next;
		}
	}
}

//let list = new LinkedList();
//list.append(2);
//list.append(3);
//list.append(4);
//list.append(2);
//list.append(7);
//list.append(3);
//list.append(2);
//list.print();
//removeDuplicates(list);
//list.print();

// Find nth to last element of singly-linked list
function getFromEnd(list, index) {
	const indexFromStart = list.length - index - 1;
	if(indexFromStart < 0 || indexFromStart >= list.length) {
		throw new Error('Invalid index');
	}

	let current = list.head;
	for(let i = 0; i < indexFromStart; i++) {
		current = current.next;
	}
	return current;
}

//let list = new LinkedList();
//list.append(2);
//list.append(3);
//list.append(4);
//list.append(2);
//list.append(7);
//list.append(3);
//list.append(2);
//console.log(getFromEnd(list, 0));
//console.log(getFromEnd(list, 5));

// delete node in middle of single linked list, given only access to that node
//function removeNode(node) {
//	if(!node) return;
//	if(!node.next) {
//		throw new Error('Expected a node in the middle of list');
//	}
//
//	let current = node;
//	while(current) {
//		current.value = current.next.value;
//
//		if(!current.next.next) {
//			current.next = null;
//			current = null;
//		} else {
//			current = current.next;
//		}
//	}
//}

function removeNode(node) {
	if(!node || !node.next) return false;

	node.value = node.next.value;
	node.next = node.next.next;
}

//const n1 = new Node(1);
//const n2 = new Node(2);
//const n3 = new Node(3);
//const n4 = new Node(4);
//const n5 = new Node(5);
//const n6 = new Node(6);
//n1.next = n2;
//n2.next = n3;
//n3.next = n4;
//n4.next = n5;
//n5.next = n6;
//
//removeNode(n3);
//console.log(n2);

// add numbers in linked list
function transformToNumber(list) {
	if(!list.head) return 0;
	let number = '';
	let current = list.head;

	while(current) {
		number = current.value + number;
		current = current.next;
	}

	return +number;
}

function transformToList(number) {
	const numberArray = String(number).split('');
	const list = new LinkedList();

	for(let i = numberArray.length - 1; i >= 0; i--) {
		list.append(numberArray[i]);
	}

	return list;
}

function sumLists(list1, list2) {
	const op1 = transformToNumber(list1);
	const op2 = transformToNumber(list2);
	const sum = op1 + op2;

	return transformToList(sum);
}

//let list1 = new LinkedList();
//list1.append(1);
//list1.append(2);
//list1.append(3);
//let list2 = new LinkedList();
//list2.append(2);
//list2.append(7);
//list2.append(1);
//transformToList(321).print();
//sumLists(list1, list2).print();
//console.log(321 + 172);

// With a circular linked list, return the node at the beginning of the loop

function getStartOfCircular(list) {
	let tracker = [];
	if(!list.head) return false;

	let current = list.head;
	while(current) {
		let index = tracker.indexOf(current);

		if(index === -1) {
			tracker.push(current);
			current = current.next;
		} else {
			return current;
		}
	}
	return false;
}

//const list = new LinkedList();
//list.append(1);
//list.append(2);
//list.append(3);
//list.append(4);
//list.append(5);
//list.append(6);
//list.append(7);
//list.append(8);
//const n5 = list.head.next.next.next.next.next;
//n5.next = list.head.next.next.next.next;
//console.log(getStartOfCircular(list));
