function Queue() {
	var items = [];

	this.enqueue = function(element) {
		items.push(element);
	};

	this.dequeue = function() {
		return items.shift();
	};

	this.front = function() {
		return items[0];
	};

	this.isEmpty = function() {
		return items.length === 0;
	};

	this.size = function() {
		return items.length;
	};

	this.print = function() {
		console.log(items.toString());
	};
}

/**********
Priority Queue
**********/

function PriorityQueue() {
	var items = [];

	function QueueElement(element, priority) {
		this.element = element;
		this.priority = priority;
	}

	// min priority queue
	// smaller number priority go to the front of the line
	//this.enqueue = function(element, priority) {
	//	var queueElement = new QueueElement(element, priority);

	//	if(this.isEmpty()) {
	//		items.push(queueElement);
	//	} else {
	//		var added = false;
	//		for(var i = 0; i < items.length; i++) {
	//			if(queueElement.priority < items[i].priority) {
	//				items.splice(i, 0, queueElement);
	//				added = true;
	//				break;
	//			}
	//		}
	//		if(!added) {
	//			items.push(queueElement);
	//		}
	//	}
	//};

	// max priority queue
	// larger number priority go to the front of the line
	this.enqueue = function(element, priority) {
		var queueElement = new QueueElement(element, priority);

		if(this.isEmpty()) {
			items.push(queueElement);
		} else {
			var added = false;
			for(var i = items.length - 1; i >= 0; i--) {
				if(queueElement.priority <= items[i].priority) {
					items.splice(i + 1, 0, queueElement);
					added = true;
					break;
				}
			}
			if(!added) {
				items.unshift(queueElement);
			}
		}
	};


	this.dequeue = function() {
		return items.shift();
	};

	this.front = function() {
		return items[0];
	};

	this.isEmpty = function() {
		return items.length === 0;
	};

	this.size = function() {
		return items.length;
	};

	this.print = function() {
		var printString = items.map(function(current) {
			return current.element;
		});
		console.log(printString.join(', '));
	};
};

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue('John', 2);
priorityQueue.enqueue('Jack', 1);
priorityQueue.enqueue('Camila', 1);
priorityQueue.enqueue('Emergency', 10);
priorityQueue.print();

/**********
Hot Potato
**********/
function hotPotato(nameList, num) {
	var queue = new Queue();

	//function randomInteger() {
	//	return Math.floor(Math.random() * 10 + 10);
	//}

	for(var i = 0; i < nameList.length; i++) {
		queue.enqueue(nameList[i]);
	}

	var eliminated = '';
	while(queue.size() > 1) {
		//var num = randomInteger();
		for(var i = 0; i < num; i++) {
			queue.enqueue(queue.dequeue());
		}
		eliminated= queue.dequeue();
		console.log(eliminated + ' was eliminated from the Hot Potato game.');
	}

	return queue.dequeue();
}

var names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
var winner = hotPotato(names, 7);
console.log('The winner is ' + winner);
