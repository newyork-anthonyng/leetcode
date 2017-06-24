/*
 * https://leetcode.com/problems/range-addition-ii/#/description
 * Given an m * n matrix M initialized with all 0's and several update operations.
 *
 * Operations are represented by a 2D array, and each operation is represented by an array with two positive integers a and b, which means M[i][j] should be added by one for all 0 <= i < a and 0 <= j < b.
 *
 * You need to count and return the number of maximum integers in the matrix after performing all the operations.
 */

function maxCount(m, n, ops) {
  let minX = m;
  let minY = n;

  for (let i = 0; i < ops.length; i++) {
    const currentOp = ops[i];
    minX = Math.min(currentOp[0], minX);
    minY = Math.min(currentOp[1], minY);
  }

  return minX * minY;
}

function maxCountForEach(m, n, ops) {
  let minX = m;
  let minY = n;

  ops.forEach(op => {
    minX = Math.min(op[0], minX);
    minY = Math.min(op[1], minY);
  });

  return minX * minY;
}

module.exports = {
  maxCount,
  maxCountForEach,
};

/*
 * Lessons learned
 * maxCount x 14,583,891 ops/sec ±5.72% (65 runs sampled)
 * Alternative Solution: Max Count with For Each x 2,249,449 ops/sec ±4.80% (63 runs sampled)
 * Fastest is maxCount
 * 548% faster
 *
 * Array.forEach is slower.
 * However, they are more semantic. Consider using it as needed.
 */
