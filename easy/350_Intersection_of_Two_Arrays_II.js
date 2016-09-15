/*
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
	var result = [];
	var smallArray, bigArray;

	if(nums1.length > nums2.length) {
		smallArray = nums2;
		bigArray = nums1;
	} else {
		smallArray = nums1;
		bigArray = nums2;
	}

	for(var i = 0; i < smallArray.length; i++) {
		var currentNum = smallArray[i];
		var index = bigArray.indexOf(currentNum);

		if(index !== -1) {
			result.push(currentNum);
			bigArray.splice(index, 1);
		}
	}

	return result;
};

console.log(intersect([1,2,2,1], [2,2]));
