/*
Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	var i = 0;
	var currentElement;
	var nextElement;

	while(i < nums.length - 1) {
		currentElement = nums[i];
		nextElement = nums[i + 1];

		if(currentElement === nextElement) {
			nums.splice(i, 1);
		} else {
			i++;
		}
	}

	return nums.length;
};

var array = [1,1,2];
console.log(removeDuplicates(array));
console.log(array);
