/*
 * https://leetcode.com/problems/reverse-string/#/description
 * Write a function that takes a string as input and returns the string reversed.
 */

function reverseString(string) {
  return string.split('').reverse().join('');
}

/*
 * Not using Array.reverse
 */
function fasterSolution(string) {
  let copy = string.split('');

  let first = 0;
  let last = string.length - 1;
  while (first < last) {
    let temp = copy[first];
    copy[first] = copy[last];
    copy[last] = temp;
    first++;
    last--;
  }

  return copy.join('');
}

/*
 * Alternative solution without using arrays!
 * https://discuss.leetcode.com/topic/48956/three-ways-to-reverse-a-string-in-javascript
 */

function alternativeSolution(string) {
  let solution = '';

  for (let i = string.length - 1; i >= 0; i--) {
    solution += string[i];
  }

  return solution;
}

module.exports = {
  reverseString,
  fasterSolution,
  alternativeSolution,
};

/*
 * Lessons learned
 *
 * MyOriginalSolution x 619,724 ops/sec ±1.63% (83 runs sampled)
 * Alternative Solution: Not using Array.reverse() x 1,462,961 ops/sec ±1.32% (85 runs sampled)
 * Alternative Solution: Not using array x 1,858,624 ops/sec ±1.03% (84 runs sampled)
 * Fastest is Alternative Solution: Not using array
 * 199% faster
 *
 * Think of solutions that don't involve creating expensive data structures, like Arrays.
 * The alternative solution is great because it doesn't use an Array, or the Array methods such as
 * Array.split() or Array.reverse().
