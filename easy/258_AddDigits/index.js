/*
 * https://leetcode.com/problems/add-digits/#/description
 *
 * Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
 *
 * For example:
 *
 * Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
 */

function addDigits(num) {
  let currentNumber = String(num);

  while (String(currentNumber).length > 1) {
    const array = currentNumber.split('');
    const sum = array.reduce((sum, current) => {
      return sum + parseInt(current, 10);
    }, 0);
    currentNumber = '' + sum;
  }

  return parseInt(currentNumber);
}

/*
 * https://discuss.leetcode.com/topic/23279/two-lines-c-code-with-explanation/2
 *
 * Mathematical answer. I would have never known this.
 */
function alternativeSolution(num) {
  const result = num % 9;
  return (result !== 0 || num === 0) ? result : 9;
}

module.exports = {
  addDigits,
  alternativeSolution,
};

/*
 * Lessons learned
 *
 * MyOriginalSolution x 864,365 ops/sec ±0.99% (83 runs sampled)
 * Alternative Solution: Using mathematics x 61,963,503 ops/sec ±1.90% (76 runs sampled)
 * Fastest is Alternative Solution: Using mathematics
 * 7068% faster
 *
 * 1. Mathematics solution is ridic fast, as expected.
 * If number is 0, then answer is 0
 * If answer is a multiple of 9, then the answer is 9
 *  Weird math property. 81 === (9 * 9), 27 === (9 * 3)
 * For all others, the answer is the modolus of the number
 *  21 % 9 === 3.
 *  22 % 9 === 4.
 *  82 % 9 === 1.
 */
