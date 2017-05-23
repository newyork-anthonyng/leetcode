/*
 * https://leetcode.com/problems/next-greater-element-i/#/description
 *
 * You are given two arrays (without duplicates) nums1 and nums2 where nums1’s
 * elements are subset of nums2. Find all the next greater numbers for nums1's
 * elements in the corresponding places of nums2.
 *
 * The Next Greater Number of a number x in nums1 is the first greater number
 * to its right in nums2. If it does not exist, output -1 for this number.
 */

function nextGreaterElement(findNums, nums) {
  const result = [];

  for (let i = 0; i < findNums.length; i++) {
    const currentNumber = findNums[i];
    const startingIndex = nums.indexOf(currentNumber);
    let foundNumber = -1;

    for (let j = startingIndex; j < nums.length; j++) {
      if (nums[j] > currentNumber) {
        foundNumber = nums[j];
        break;
      }
    }

    result.push(foundNumber);
  }

  return result;
}

function whileLoop(findNums, nums) {
  const result = [];

  for (let i = 0; i < findNums.length; i++) {
    const currentNumber = findNums[i];
    let index = nums.indexOf(currentNumber);
    let foundNumber = -1;

    while (index < nums.length) {
      if (nums[index] > currentNumber) {
        foundNumber = nums[index];
        break;
      }
      index++;
    }

    result.push(foundNumber);
  }

  return result;
}

module.exports = {
  nextGreaterElement,
  whileLoop,
};

/*
 * Lessons learned
 *
 * MySolution x 3,166,379 ops/sec ±3.40% (76 runs sampled)
 * WhileLoop x 3,549,203 ops/sec ±1.48% (83 runs sampled)
 * Fastest is WhileLoop
 * 10% faster
 *
 * While loops are still faster :)
 * Take time to read and understand the problem before jumping into code.
 */
