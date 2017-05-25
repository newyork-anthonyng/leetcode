/*
 * https://leetcode.com/problems/max-consecutive-ones/#/description
 *
 * Given a binary array, find the maximum number of consecutive 1s in this array.
 */

function maxConsecutiveOnes(nums) {
  let max = 0;

  let currentMax = 0;
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];

    if (current === 1) {
      currentMax++;
    } else {
      max = Math.max(max, currentMax);
      currentMax = 0;
    }
  }

  return Math.max(max, currentMax);
}

/*
 * Alternative solution does not use Math.max() method
 */
function alternativeSolution(nums) {
  let max = 0;

  let currentMax = 0;
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];

    if (current === 1) {
      currentMax++;
    } else {
      max = max > currentMax ? max : currentMax;
      currentMax = 0;
    }
  }

  return max > currentMax ? max : currentMax;
}

/*
 * https://discuss.leetcode.com/topic/86838/javascript-solution
 *
 * Different solution that uses array length
 */
function arraySolution(nums) {
  var str = nums.join('').split('0').map((value) => value.length);

  return Math.max.apply(null, str);
}

module.exports = {
  maxConsecutiveOnes,
  alternativeSolution,
  arraySolution,
};

/*
 * Lessons learned
 *
 * MySolution x 17,007,710 ops/sec ±1.18% (82 runs sampled)
 * Alternative Solution x 16,729,903 ops/sec ±1.04% (82 runs sampled)
 * Array solution x 340,317 ops/sec ±1.39% (76 runs sampled)
 * Fastest is MySolution
 * 97% faster
 *
 * Math.max() is faster than doing a max check yourself
 * As expected, using arrays was super slow.
 *
 * It was interesting to see how the alternative solution from leetcode used arrays and array.length to find
 * out the longest consecutive strings of 1. Thinking outside the box.
 */
