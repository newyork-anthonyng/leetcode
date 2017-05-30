/*
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/#/description
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 *
 * Find all the elements of [1, n] inclusive that do not appear in this array.
 *
 * Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
 */

/*
 * My solution was getting a "Time Limit Exceeded" durring leetcode's submission.
 * My guess is that the .sort and .filter were taking a long time to execute.
 */
function findDisappearedNumbers(nums) {
  const myArray = nums.sort((a, b) => a - b)
    .filter((num, i, array) => array.lastIndexOf(num) === i);

  let result = [];
  for (let i = 0; i < myArray.length; i++) {
    // handle first number in array
    if (i === 0) {
      const difference = Math.abs(myArray[0], 1);
      if (difference > 0) {
        const missingNumbers = getNumbersFromRange(0, myArray[0]);
        result = result.concat(missingNumbers);
      }
    }

    // handle last number in array
    if (i === (myArray.length - 1)) {
      const difference = Math.abs(myArray[i], nums.length + 1);
      if (difference > 0) {
        const missingNumbers = getNumbersFromRange(myArray[i], nums.length + 1);
        result = result.concat(missingNumbers);
      }
    }

    const difference = Math.abs(myArray[i], myArray[i - 1]);
    if (difference > 1) {
      result = result.concat(getNumbersFromRange(myArray[i - 1], myArray[i]));
    }
  }

  return result;
}

function getNumbersFromRange(start, end) {
  const result = [];
  for (let i = start + 1; i < end; i++) {
    result.push(i);
  }
  return result;
}

// https://discuss.leetcode.com/topic/89007/my-o-1-space-solution-without-math-abs-function-or-operation
// O(n) solution without extra space
function alternateSolution(nums) {
  const copy = nums.splice(0);
  const result = [];

  let i = 0;
  while (i < copy.length) {
    // if current number isn't marked as swapped
    // if current number isn't already in its correct position
    // if we haven't already swapped a duplicate number there before
    if (
      copy[i] !== -1 &&
      copy[i] !== i + 1 &&
      copy[copy[i] - 1] !== -1
    ) {
      const tmp = copy[i] - 1;
      copy[i] = copy[tmp];
      copy[tmp] = -1;
    } else {
      // if the number is in the correct space
      // flag it as swapped, and move to the next number in array
      if (copy[i] === i + 1) {
        copy[i] = -1;
      }
      i++;
    }
  }

  // any numbers that are not marked as swapped in its correct place...
  // include in results answer
  for (let i = 0; i < copy.length; i++) {
    if (copy[i] !== -1) {
      result.push(i + 1);
    }
  }
  return result;
}

module.exports = {
  findDisappearedNumbers,
  getNumbersFromRange,
  alternateSolution,
};

/*
 * Lessons Learned
 *
 * MyOriginalSolution x 136,895 ops/sec ±0.91% (85 runs sampled)
 * Alternative Solution: O(n) without extra space x 8,029,544 ops/sec ±1.11% (84 runs sampled)
 * Fastest is Alternative Solution: O(n) without extra space
 * 5765% faster
 *
 * Array.filter() and Array.sort() are super expensive functions
 * Get comfortable swapping elements inside an array
 */
