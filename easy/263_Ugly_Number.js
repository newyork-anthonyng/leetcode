/*
Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

Note that 1 is typically treated as an ugly number.
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
	if(num === 1) return true;
	if(num <= 0) return false;

	// get all primes below num
	var allPrimes = getPrimes(num);
	var primeFactors = [];

	for(var i = 0; i < allPrimes.length; i++) {
		if(num % allPrimes[i] === 0) {
			primeFactors.push(allPrimes[i]);
		}
	}

	var uglyPrimes = [2,3,5];
	console.log('allPrimes:', allPrimes);
	console.log('prime factors:', primeFactors);
	for(var i = 0; i < primeFactors.length; i++) {
		var currentPrime = primeFactors[i];
		if(uglyPrimes.indexOf(currentPrime) === -1) {
			return false;
		}
	}

	return true;
};

function getPrimes(num) {
	num = num + 1;
	var array = [];
	var upperLimit = Math.sqrt(num);
	var result = [];

	for(var i = 0; i < num; i++) {
		array.push(true);
	}

	for(var i = 2; i < upperLimit; i++) {
		if(array[i]) {
			for(var j = i * i; j < num; j += i) {
				array[j] = false;
			}
		}
	}

	for(var i = 2; i < num; i++) {
		if(array[i]) {
			result.push(i);
		}
	}

	return result;
}

console.log(isUgly(6), true);
console.log(isUgly(8), true);
console.log(isUgly(14), false);
console.log(isUgly(7), false);
console.log(getPrimes(7));
