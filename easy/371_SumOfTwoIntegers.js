/*
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
//var getSum = function(a, b) {
// // simple solution using "--" operator
//	while(b--) {
//		a++;
//	}
//
//	return a;
//};

//var getSum = function(a, b) {
//	// using recursion
//	var sum, carry;
//	if(b === 0) {
//		return a;
//	}
//
//	sum = a ^ b;
//	carry = (a & b) << 1;
//	return getSum(sum, carry);
//};

var getSum = function(a, b) {
	// without recursion
	var sum, carry;

	while(carry !== 0) {
		sum = a ^ b;
		carry = (a & b) << 1;
		a = sum;
		b = carry;
	}

	return sum;
};

console.log(getSum(9, 12));
console.log(getSum(10, 10));
