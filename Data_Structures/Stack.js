function Stack() {
	var items = [];

	this.push = function(element) {
		items.push(element);
	};

	this.pop = function(element) {
		return items.pop();
	};

	this.peek = function() {
		return items[items.length - 1];
	};

	this.isEmpty = function() {
		return items.length === 0;
	};

	this.size = function() {
		return items.length;
	};

	this.clear = function() {
		items = [];
	};

	this.print = function() {
		console.log(items.toString());
	};
};

/**********
Stack Examples
**********/

function divideBy2(decNumber) {
	var remStack = new Stack();
	var rem;
	var binaryString = '';

	while(decNumber > 0) {
		rem = decNumber % 2;
		remStack.push(rem);
		decNumber = Math.floor(decNumber / 2);
	}

	while(!remStack.isEmpty()) {
		binaryString += remStack.pop().toString();
	}

	return binaryString;
}

console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(1000));

function baseConverter(decNumber, base) {
	var remStack = new Stack();
	var rem;
	var baseString = '';
	var digits = '0123456789ABCDEF';

	while(decNumber > 0) {
		rem = decNumber % base;
		remStack.push(rem);
		decNumber = Math.floor(decNumber / base);
	}

	while(!remStack.isEmpty()) {
		baseString += digits[remStack.pop()];
	}

	return baseString;
}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
