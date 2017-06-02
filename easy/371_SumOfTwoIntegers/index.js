/*
 * https://leetcode.com/problems/sum-of-two-integers/#/description
 *
 * Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
 *
 * Example:
 * Given a = 1 and b = 2, return 3.
 */

/*
 * https://discuss.leetcode.com/topic/49892/c-using-xor-with-explaination
 * I couldn't remember how to do binary addition
 */
function getSum(a, b) {
  let _a = a;
  let _b = b;

  while (_b) {
    const carry = _a & _b;
    _a = _a ^ _b;
    _b = carry << 1;
  }

  return _a;
}

// Traditional addition
function alternativeSolution(a, b) {
  return a + b;
}

module.exports = {
  getSum,
  alternativeSolution,
};

/*
 * Lessons learned
 *
 * MyOriginalSolution x 70,411,006 ops/sec ±1.56% (82 runs sampled)
 * Alternative Solution: Using regular "+" x 75,682,060 ops/sec ±2.33% (77 runs sampled)
 * Fastest is Alternative Solution: Using regular "+"
 * 7% faster
 *
 * The regular "+" operator probably has optimizations built into it?
 * I need to review binary additiona and make it stick to my brain.
 */
