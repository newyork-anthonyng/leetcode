function DoublyLinkedList() {
	var Node = function(element) {
		this.element = element;
		this.next = null;
		this.previous = null;
	};

	var length = 0;
	var head = null;
	var tail = null;

	this.insert = function(position, element) {
		if(position >= 0 && position <= length) {
			var node = new Node(element);
			var current = head;

			if(position === 0) {
				if(!head) {
					head = node;
					tail = node;
				} else {
					node.next = current;
					current.previous = node;
					head = node;
				}
			} else if(position === length) {
				current = tail;
				current.next = node;
				node.previous = current;
				tail = node;
			} else {
				var previous;
				var index = 0;

				while(index++ < position) {
					previous = current;
					current = current.next;
				}

				node.next = current;
				current.previous= node;

				previous.next = node;
				node.previous = previous;
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

				if(length === 1) {
					tail = null; // there are no more nodes left
				} else {
					head.previous = null;
				}
			} else if(position === length) {
				current = tail.previous;
				tail = current;
				tail.next = null;
			} else {
				var previous;
				var index = 0;

				while(index++ < position) {
					previous = current;
					current = current.next;
				}

				previous.next = current.next;
				current.next.previous = previous;
			}

			length--;
			return current.element;
		} else {
			return null;
		}
	};

	// all other methods are the same as LinkedList
}
