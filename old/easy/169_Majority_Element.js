/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
	var majorityNum = Math.floor(nums.length / 2);
	var tracker = {};

	for(var i = 0; i < nums.length; i++) {
		var currentNum = nums[i];

		if(tracker[currentNum] === undefined) {
			tracker[currentNum] = 0;
		}

		tracker[currentNum]++;

		if(tracker[currentNum] > majorityNum) {
			return currentNum;
		}
	}
};

/*
Clever solution.
When sorted, the majority element will be in the middle of the set
var majorityElement = function(nums) {
	// sort
	nums.sort();
	return nums[Math.floor(nums.length / 2)];
}
*/

console.log(majorityElement([1]));
console.log(majorityElement([1,2,3,2,2]));
console.log(majorityElement([2, 2]));
