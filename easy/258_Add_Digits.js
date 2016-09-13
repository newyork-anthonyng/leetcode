/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
*/

/**
 * @param {number} num
 * @return {number}
 */
//var addDigits = function(num) {
//	// using loops
//	while(String(num).length !== 1) {
//		num = String(num).split('').reduce(function(prev, curr) {
//			return Number(prev) + Number(curr);
//		}, 0);
//
//	}
//
//	return num;
//};

var addDigits = function(num) {
	// not using loops
	if(num === 0) {
		return 0;
	} else if(num % 9 === 0) {
		return 9;
	} else {
		return num % 9;
	}
};

console.log(addDigits(38));
console.log(addDigits(444));
