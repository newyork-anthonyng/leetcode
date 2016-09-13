/*
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
	var result = [];
	var larger, smaller;

	if(nums1.length < nums2.length) {
		larger = nums2;
		smaller = nums1;
	} else {
		larger = nums1;
		smaller = nums2;
	}

	for(var i = 0; i < larger.length; i++) {
		var currentNum = larger[i];

		var foundUniqueNum = (smaller.indexOf(currentNum) !== -1) && (result.indexOf(currentNum) === -1);
		if(foundUniqueNum) {
			result.push(currentNum);
		}
	}

	return result;
};

console.log(intersection([1,2,2,1], [2,2]));
