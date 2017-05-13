/*
Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	var numTracker = {};

	for(var i = 0; i < nums.length; i++) {
		var currentNum = nums[i];

		numTracker[currentNum] = numTracker[currentNum] + 1 || 1;
	}

	for(var key in numTracker) {
		if(numTracker.hasOwnProperty(key)) {
			if(numTracker[key] === 1) {
				return Number(key);
			}
		}
	}

	return false;
};

console.log(singleNumber([1,1,2,3,3]));
