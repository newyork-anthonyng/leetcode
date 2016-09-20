/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	if(nums.length === 0) return 0;
	var robbedMoney = [];

	for(var i = 0; i < nums.length; i++) {
		var current = nums[i];

		if(i === 0) {
			robbedMoney[i] = current;
		} else if(i === 1) {
			robbedMoney[i] = Math.max(robbedMoney[i-1], current);
		} else {
			var robThisHouse = current + robbedMoney[i-2];
			var dontRobThisHouse = robbedMoney[i-1];
			robbedMoney[i] = Math.max(robThisHouse, dontRobThisHouse);
		}
	}

	return robbedMoney.pop();
};

console.log(rob([500, 600, 600, 1000]));
