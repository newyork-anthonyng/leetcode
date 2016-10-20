// use a single array to implement three stacks

function ThreeStack() {
	this.stackSize = 50;
	this.myStack = new Array(this.stackSize * 3);
	this.myStack.fill(0);
	this.pointers = [0, 0, 0];

	this.push = function(stackNumber, value) {
		const index = (stackNumber * this.stackSize) + this.pointers[stackNumber] + 1;
		this.myStack[index] = value;
		this.pointers[stackNumber]++;
	}

	this.pop = function(stackNumber) {
		const index = (stackNumber * this.stackSize) + this.pointers[stackNumber];
		const value = this.myStack[index];
		this.myStack[index] = 0;
		this.pointers[stackNumber]--;
		return value;
	}

	this.print = function() {
		console.log(this.myStack);
	}
}

//const stack = new ThreeStack();
//stack.push(0, 2);
//stack.push(1, 66);
//stack.print();
//console.log(stack.pop(1));
//stack.print();

// Create a minimum method for stack

function Stack() {
	this.stack = [];

	this.push = function(value) {
		this.stack.push(value);
	};

	this.pop = function() {
		return this.stack.pop();
	};

	this.peek = function() {
		return this.stack[this.stack.length - 1];
	};

	this.isEmpty = function() {
		return this.stack.length === 0;
	};

	this.min = function() {
		return Math.min.apply(null, this.stack);
	};

	this.size = function() {
		return this.stack.length;
	};

	this.print = function() {
		console.log(this.stack);
	};
}

//let stack = new Stack();
//stack.push(100);
//stack.push(50);
//stack.push(303);
//console.log(stack.min());

// Create a Set Of Stacks function that creates a new stack when the previous one is too tall

function SetOfStacks() {
	this.threshold = 5;
	this.stacks = [];
	this.stacks.push(new Stack());

	this.push = function(value) {
		let currentStack = this.getCurrentStack();
		if(currentStack.size() >= this.threshold) {
			this.stacks.push(new Stack());
			currentStack = this.getCurrentStack();
		}
		currentStack.push(value);
	};

	this.pop = function() {
		let currentStack = this.getCurrentStack();
		if(currentStack.length === 0) {
			this.stacks.pop();
			currentStack = this.getCurrentStack();
		}

		return currentStack.pop();
	};

	this.popAt = function(index) {
		if(index < 0 || index >= this.stacks.length) {
			throw new RangeError('Index doesn\'t exist in stack');
		}

		return this.stacks[index].pop();
	};

	this.getCurrentStack = function() {
		return this.stacks[this.stacks.length - 1];
	};

	this.print = function() {
		for(let i = 0; i < this.stacks.length; i++) {
			console.log(`stack number ${i + 1}`);
			console.log(this.stacks[i].stack);
		}
	};
}

//const stack = new SetOfStacks();
//for(let i = 0; i < 15; i++) {
//	stack.push(i);
//}
//stack.print();
//console.log(stack.pop());
//stack.print();
//stack.popAt(0);
//stack.print();

// Implement a Queue using two stacks

function MyQueue() {
	this.mainStack = new Stack();
	this.subStack = new Stack();

	this.push = function(value) {
		while(!this.mainStack.isEmpty()) {
			this.subStack.push(this.mainStack.pop());
		}

		this.mainStack.push(value);

		while(!this.subStack.isEmpty()) {
			this.mainStack.push(this.subStack.pop());
		}
	};

	this.pop = function() {
		return this.mainStack.pop();
	};

	this.peek = function() {
		return this.mainStack.peek();
	};

	this.isEmpty = function() {
		return this.mainStack.isEmpty();
	};

	this.print = function() {
		console.log(this.mainStack.stack);
	};
}

//let queue = new MyQueue();
//for(let i = 0; i < 15; i++) {
//	queue.push(i);
//}
//queue.print();
//console.log(queue.pop());

// Sort stack in ascending order
function sortStack(stack) {
	const stackArray = [];

	while(!stack.isEmpty()) {
		stackArray.push(stack.pop());
	}

	stackArray.sort(function(a, b) {
		return a - b;
	});
	for(let i = stackArray.length - 1; i >= 0; i--) {
		stack.push(stackArray[i]);
	}

	return stack;
}

//const stack = new Stack();
//stack.push(100);
//stack.push(44);
//stack.push(90);
//stack.push(33);
//stack.push(24);
//stack.print();
//sortStack(stack);
//stack.print();
