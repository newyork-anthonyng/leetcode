/*
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	if(k === 0) return;

	for(var i = 0; i < k; i++) {
		rotateOnce(nums);
	}
};

function rotateOnce(array) {
	var lastElement = array[array.length - 1];
	for(var i = array.length - 1; i > 0; i--) {
		array[i] = array[i - 1];
	}
	array[0] = lastElement;
}

var array = [1,2,3];
rotate(array, 2);
console.log(array);
