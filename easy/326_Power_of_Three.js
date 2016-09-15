/*
Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion?*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
	if(n === 1) return true;

	while((n % 3 === 0) && (n > 0)) {
		n = n / 3;

		if(n === 1) return true;
	}

	return false;
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(30));
console.log(isPowerOfThree(81));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(1));
