/*
Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.
*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
	// convert to a binary string
	var binaryString = n.toString(2);
	var binaryArray = binaryString.split('');

	// count all 1's
	var sum = 0;
	for(var i = 0; i < binaryArray.length; i++) {
		if(binaryArray[i] == 1) {
			sum++;
		}
	}

	return sum;
};

console.log(hammingWeight(11));
console.log(hammingWeight(1));
