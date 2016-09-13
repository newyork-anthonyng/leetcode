/*
Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:
	A -> 1
	B -> 2
	C -> 3
	...
	Z -> 26
	AA -> 27
	AB -> 28
*/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
	var titleArray = s.split('').reverse();
	var result = 0;

	for(var i = 0; i < titleArray.length; i++) {
		var charCode = (titleArray[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1) * Math.pow(26, i);

		result += charCode;
	}

	return result;
};

console.log(titleToNumber('A'), 1);
console.log(titleToNumber('Z'), 26);
console.log(titleToNumber('AA'), 27);
console.log(titleToNumber('AZ'), 52);
console.log(titleToNumber('BA'), 53);
console.log(titleToNumber('AAA'), 703);
console.log(titleToNumber('AAB'), 704);
console.log(titleToNumber('AAZZ'), 18954);
console.log(titleToNumber('ABAA'), 18955);
console.log(titleToNumber('AJHX'), 24568);
