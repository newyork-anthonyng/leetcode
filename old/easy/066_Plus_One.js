/*
Given a non-negative number represented as an array of digits, plus one to the number.

The digits are stored such that the most significant digit is at the head of the list.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	for( var i = digits.length - 1; i >= 0; i--) {
		if(digits[i] === 9) {
			if(i === 0) {
				digits[i] = 0;
				digits.unshift(1);
				break;
			}
			d[i] = 0;
		} else {
			digits[i]++;
			break;
		}
	}

	return digits;
};

console.log(plusOne([1,2,3]));
