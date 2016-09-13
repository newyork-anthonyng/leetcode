/*
Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".
*/

var reverseString = function(s) {
	if(typeof s !== 'string') {
		throw new Error('reverseString() only accepts a string argument');
	}

	return s.split('').reverse().join('');
};

console.log(reverseString('hello'));
