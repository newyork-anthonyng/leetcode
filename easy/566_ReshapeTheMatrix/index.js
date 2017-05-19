/*
 * You're given a matrix represented by a two-dimensional array,
 * and two positive integers r and c representing the row number and column
 * number of the wanted reshaped matrix, respectively.
 *
 * The reshaped matrix need to be filled with all the elements of the original
 * matrix in the same row-traversing order as they were.
 *
 * If the 'reshape' operation with given parameters is possible and legal,
 * output the new reshaped matrix; Otherwise, output the original matrix.
 * https://leetcode.com/problems/reshape-the-matrix/#/description
 */

function reshapeMatrix(array, rows, columns) {
  const flattenedArray = flattenArray(array);

  if (flattenedArray.length !== (rows * columns)) {
    return array;
  }

  const result = [];

  for (let i = 0; i < rows; i++) {
    const currentRow = [];

    for (let j = 0; j < columns; j++) {
      currentRow.push(flattenedArray.shift());
    }
    result.push(currentRow);
  }

  return result;
}

function flattenArray(arrayOfArrays) {
  return arrayOfArrays.reduce((accumulator, currentArray) => {
    return accumulator.concat(currentArray);
  }, []);
}

module.exports = {
  reshapeMatrix,
  flattenArray,
};

/*
 * Lessons learned:
 *
 * The spaceSaving solution is 70% faster.
 * If I take out the nested for-loop in my solution, it is only 40% faster.
 *
 * My guess is that this 40% is due to the flattening of the array.
 * Whenever possible, try to spend some time to think of more "mathematical" (smarter) ways
 * of doing things.
 *
 * For example:
 * Using i / columns to get the current row, and i % columns to get the current column
 * Using i / desiredColumns to get the row of the new array, and i % desiredColumns to get the column of the new array
 *
 * Benchmark:
 * MyOriginalSolution x 70,963 ops/sec ±2.01% (75 runs sampled)
 * SpaceEfficientSolution x 242,020 ops/sec ±1.68% (78 runs sampled)
 * Fastest is SpaceEfficientSolution
 * 70% faster
 */
