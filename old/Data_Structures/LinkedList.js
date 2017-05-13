function LinkedList() {
	var Node = function(element) {
		this.element = element;
		this.next = null;
	};

	var length = 0;
	var head = null;

	this.append = function(element) {
		var node = new Node(element);

		if(head === null) {
			head = node;
		} else {
			var current = head;

			while(current.next) {
				current = current.next;
			}

			current.next = node;
		}

		length++;
	};

	this.insert = function(position, element) {
		if(position >= 0 && position <= length) {
			var node = new Node(element);
			var current = head;

			if(position === 0) {
				node.next = current;
				head = node;
			} else {
				var previous;
				var index = 0;

				while(index++ < position) {
					previous = current;
					current = current.next;
				}

				previous.next = node;
				node.next = current;
			}

			length++;
			return true;
		} else {
			return false;
		}
	};

	this.removeAt = function(position) {
		if(position > -1 && position < length) {
			var current = head;

			if(position === 0) {
				head = current.next;
			} else {
				var previous;
				var index = 0;

				while(index++ < position) {
					previous = current;
					current = current.next;
				}

				previous.next = current.next;
			}

			length--;
			return current.element;
		} else {
			return null;
		}
	};

	this.remove = function(element) {
		var index = this.indexOf(element);
		return this.removeAt(index);
	};

	this.indexOf = function(element) {
		var current = head;
		var index = 0;

		while(current) {
			if(current.element === element) {
				return index;
			}
			index++;
			current = current.next;
		}

		return -1;
	};

	this.isEmpty = function() {
		return length === 0;
	};

	this.size = function() {
		return length;
	};

	this.toString = function() {
		var current = head;
		var elementArray = [];

		while(current) {
			elementArray.push(current.element);
			current = current.next;
		}

		return elementArray.join(', ');
	};

	this.getHead = function() {
		return head;
	};

	this.print = function() {
		console.log(this.toString());
	};
}

var list = new LinkedList();
list.append(15);
list.append(10);
list.print();
