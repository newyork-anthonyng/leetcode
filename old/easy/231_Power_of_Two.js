/*
Given an integer, write a function to determine if it is a power of two.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
	if(n === 1) return true;

	while((n % 2 === 0) && (n > 0)) {
		n /= 2;
		if(n === 1) return true;
	}
	return false;
};

console.log(isPowerOfTwo(1), true);
console.log(isPowerOfTwo(2), true);
console.log(isPowerOfTwo(8), true);
console.log(isPowerOfTwo(9), false);
