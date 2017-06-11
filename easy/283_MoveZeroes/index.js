/*
 * https://leetcode.com/problems/move-zeroes/#/description
 *
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 *
 * For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
 *
 * Note:
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 */

function moveZeroes(nums) {
  let lastZeroIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];

    if (currentNumber === 0 && lastZeroIndex === -1) {
      lastZeroIndex = i;
    } else {
      if (lastZeroIndex !== -1 && currentNumber !== 0) {
        nums[lastZeroIndex] = nums[i];
        nums[i] = 0;
        lastZeroIndex++;
      }
    }
  }
}

// https://discuss.leetcode.com/topic/27327/my-javascript-solution
// User-submitted answer
function alternateAnswer(nums) {
  for(var i = nums.length;i--;){
    if(nums[i]===0){
      nums.splice(i,1)
      nums.push(0);
    }
  }
}

// https://leetcode.com/articles/move-zeroes/
function optimalAnswer(nums) {
  let lastZeroFound = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const tmp = nums[lastZeroFound];
      nums[lastZeroFound] = nums[i];
      nums[i] = tmp;
      lastZeroFound++;
    }
  }
}

module.exports = {
  moveZeroes,
  alternateAnswer,
  optimalAnswer,
};

/*
 * Lessons learned:
 *
 * MyOriginalSolution x 10,989,100 ops/sec ±3.77% (73 runs sampled)
 * Alternative Solution: Other JavaScript answer x 631,782 ops/sec ±5.28% (68 runs sampled)
 * Alternative Solution: Optimal Answer x 15,462,472 ops/sec ±2.27% (76 runs sampled)
 * Fastest is Alternative Solution: Optimal Answer
 * 2347% faster
 *
 * The user submitted answer uses .push() and .splice(), which are expensive Array methods.
 *
 *
 * My answer was close to the optimal answer. I had unnecessary checks for the "lastZeroFound" index.
 */
