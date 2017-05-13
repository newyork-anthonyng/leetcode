/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	var current;
	var complement;
	var complementIndex;

	for(var i = 0; i < nums.length; i++) {
		current = nums[i];
		complement = target - current;
		complementIndex = nums.lastIndexOf(complement);

		if((complementIndex !== -1) && (i !== complementIndex)) {
			return [i, complementIndex];
		}
	}
};

var array = [2, 7, 11, 15];
console.log(twoSum(array, 9));
array =  [3,2,4];
console.log(twoSum(array, 6));
