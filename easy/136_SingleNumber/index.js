/*
 * https://leetcode.com/problems/single-number/#/description
 *
 * Given an array of integers, every element appears twice except for one. Find that single one.
 */

// implement this with linear runtime
function singleNumber(nums) {
  const result = Object.create(null);

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];

    if (result[currentNumber]) {
      result[currentNumber]++;
    } else {
      result[currentNumber] = 1;
    }
  }

  const keys = Object.keys(result);
  for (let i = 0; i < keys.length; i++) {
    if (result[keys[i]] === 1) {
      return parseInt(keys[i], 10);
    }
  }
}

// alternative solution that uses `for...in` instead of Object.keys() to iterate through properties
function alternativeSolution(nums) {
  const result = Object.create(null);

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];

    if (result[currentNumber]) {
      result[currentNumber]++;
    } else {
      result[currentNumber] = 1;
    }
  }

  for (let key in result) {
    if (result[key] === 1) {
      return parseInt(key, 10);
    }
  }
}

// alternative solution that does not use more space
function noExtraMemory(nums) {
  const sortedArray = nums.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  for (let i = 0; i < sortedArray.length; i += 2) {
    if (sortedArray[i] !== sortedArray[i + 1]) {
      return sortedArray[i];
    }
  }
}

/*
 * best solution using bitwise XOR
 * https://discuss.leetcode.com/topic/1916/my-o-n-solution-using-xor
 * Performs the XOR operation on each pair of bits. a XOR b yields 1 if a and b are different.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#(Bitwise_XOR)
 */
function xorSolution(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
}

module.exports = {
  singleNumber,
  alternativeSolution,
  noExtraMemory,
  xorSolution,
};

/*
 * Lessons learned
 *
 * singleNumber x 413,543 ops/sec ±1.13% (84 runs sampled)
 * Alternative Solution: Without Object.keys() x 735,388 ops/sec ±1.19% (82 runs sampled)
 * Alternative Solution: No extra memory x 972,690 ops/sec ±3.55% (74 runs sampled)
 * Fastest is Alternative Solution: No extra memory
 * 135% faster
 *
 * 1. Using for...in is faster than iterating through Object.keys
 * 2. Array.sort() solution was faster than the extra memory solution.
 *   Why?
 *   a. We are going through 2 for-loops?
 *   b. Less if-else checks
 *
 * Alternative Solution: Without Object.keys() x 764,919 ops/sec ±0.87% (82 runs sampled)
 * Alternative Solution: No extra memory x 1,066,722 ops/sec ±1.40% (80 runs sampled)
 * Alternative Solution: XOR solution x 20,232,061 ops/sec ±1.15% (83 runs sampled)
 * Fastest is Alternative Solution: XOR solution
 * 4868% faster
 *
 * 3. WHOA! XOR solution of course is the fastest. 20m operations vs. 1m operations
 * What is the XOR (^) doing?
 * When you XOR 2 numbers together and they are equal, XOR will return 0
 * 5 ^ 5 === 0
 *
 * When you XOR 2 numbers together and they are dirrect, XOR will return you the difference between the numbers
 * 5 ^ 0 === 5
 *
 * Using this, we can see what the odd number out is. Super elegant solution.
 */
