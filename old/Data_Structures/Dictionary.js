function Dictionary() {
	var items = {};

	this.has = function(key) {
		return items.hasOwnProperty(key);
	};

	this.set = function(key, value) {
		items[key] = value;
	};

	this.remove = function(key) {
		if(this.has(key)) {
			delete items[key];
			return true;
		}

		return false;
	};

	this.get = function(key) {
		return items[key];
	};

	this.values = function() {
		var values = [];

		for(var k in items) {
			if(this.has(k)) {
				values.push(items[k]);
			}
		}
		return values;
	};

	this.clear = function() {
		items = {};
	};

	this.size = function() {
		return this.values().length;
	};

	this.keys = function() {
		return Object.keys(items);
	};

	this.getItems = function() {
		return items;
	};
}

/**********
Email
**********/

var dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');
console.log(dictionary.has('Gandalf'));
console.log(dictionary.size());
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));
