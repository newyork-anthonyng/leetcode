/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

/**
 * @param {number} n
 * @return {number}
 */
// use fibonacci
// If our input is 12, then the only ways we can get to the
// 12th step, is from being on the 11th step, or 10th step.
// climbStairs(12) = climbStairs(10) + climbStairs(11);
var climbStairs = function(n) {
	var saved = [0, 1, 2];

	function climb(n) {
		if(saved[n]) {
			return saved[n];
		} else {
			var result = climb(n - 1) + climb(n - 2);
			saved.push(result);
			return result;
		}
	};

	return climb(n);
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));
console.log(climbStairs(7));
console.log(climbStairs(44));
