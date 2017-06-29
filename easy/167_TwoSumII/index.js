/*
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/#/description
 *
 * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
 *
 * The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
 *
 * You may assume that each input would have exactly one solution and you may not use the same element twice.
 *
 * Input: numbers={2, 7, 11, 15}, target=9
 * Output: index1=1, index2=2
 */

function twoSum(numbers, target) {
  let min = 0;
  let max = numbers.length - 1;

  let currentSum = numbers[min] + numbers[max];
  while (currentSum !== target) {
    if (currentSum > target) {
      max--;
    } else {
      min++;
    }
    currentSum = numbers[min] + numbers[max];
  }

  return [min + 1, max + 1];
}

function mySolution(numbers, target) {
  // construct object
  const obj = {};
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    if (!obj[currentNumber]) {
      obj[currentNumber] = [i];
    } else {
      obj[currentNumber].push(i);
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    const supplement = target - currentNumber;

    if (obj[supplement]) {
      if (currentNumber === supplement) {
        if (obj[currentNumber].length > 1) {
          return [obj[currentNumber][0] + 1, obj[currentNumber][1] + 1];
        }
      } else {
        return [obj[currentNumber][0] + 1, obj[supplement][0] + 1];
      }
    }
  }
}

module.exports = {
  twoSum,
  mySolution,
};

/*
 * Lessons learned
 * twoSum x 11,472,146 ops/sec ±1.15% (81 runs sampled)
 * Alternative Solution: My dirty solution x 120,366 ops/sec ±2.29% (82 runs sampled)
 * Fastest is twoSum
 * 9431% faster
 *
 * As expected, working with arrays is slower.
 * It was a really clever solution though, to take advantage of the sorted numbers.
 */
