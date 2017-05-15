/*
 * https://leetcode.com/problems/array-partition-i/#/description
 *
 * Given an array of 2n integers, your task is to group these integers into
 * n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum
 * of min(ai, bi) for all i from 1 to n as large as possible.
 */

function arrayPartition(array) {
  if (array.length % 2 !== 0) {
    throw Error('Argument must contain even number of elements');
  }

  const sortedArray = array.sort((a, b) => {
    return a - b;
  });
  const filteredArray = sortedArray.filter((element, index) => {
    return index % 2 === 0;
  });
  return filteredArray.reduce((sum, element) => {
    return sum + element;
  }, 0);
}

function moreEfficientSolution(array) {
  if (array.length % 2 !== 0) {
    throw Error('Argument must contain even number of elements');
  }

  const sortedArray = array.sort((a, b) => {
    return a - b;
  });

  let result = 0;
  for (let i = 0; i < sortedArray.length; i += 2) {
    result += sortedArray[i];
  }
  return result;
}

module.exports = {
  arrayPartition,
  moreEfficientSolution,
};

/*
 * Lessons learned
 *
 * MyOriginalSolution x 190,414 ops/sec ±12.77% (60 runs sampled)
 * MyMoreEfficient(???)Solution x 956,679 ops/sec ±5.43% (69 runs sampled)
 * Fastest is MyMoreEfficient(???)Solution
 * 402.41937413323683% faster
 *
 * Native JavaScript Array methods are a lot slower than for loops.
 * If performance is of concern, then stick with for loops.
 *
 * Array.sort().
 * It sorts numbers weirdly. By default, it converts it based on its Unicode character.
 * With numbers, it first converts it to a string value, then compares them.
 * Therefore, 9 comes before 80, because "80" comes before "9" in Unicode.
 * You need to pass in compare function to Array.sort() for numbers.
 *
 * To sort in ascending order,
 * Array.sort((a, b) => a - b);
 */
