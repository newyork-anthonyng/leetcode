/*
 *
 *
 * Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.
 *
 * The same repeated number may be chosen from C unlimited number of times.
 *
 * Note:
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * For example, given candidate set [2, 3, 6, 7] and target 7, 
 * A solution set is: 
 * [
 *   [7],
 *     [2, 2, 3]
 *     ]
 *
 */

function combinationSum(candidates, target) {
  return _combinationSum(candidates, target, 0);
}

function _combinationSum(unsortedCandidates, target, index) {
  const results = [];
  const candidates = unsortedCandidates.sort((a, b) => a - b);

  for (let i = index; i < candidates.length; i++) {
    const currentCandidate = candidates[i];

    if (currentCandidate < target) {
      const recursiveResults = _combinationSum(unsortedCandidates, target - currentCandidate, i);

      recursiveResults.forEach(result => {
        results.push([currentCandidate, ...result]);
      });
    } else if (currentCandidate === target) {
      results.push([currentCandidate]);
    } else {
      break;
    }
  }

  return results;
}

function optimized(candidates, target) {
  const sortedCandidates = candidates.sort((a, b) => a - b);

  return _optimized(candidates, target);
}

function _optimized(candidates, target) {
  const results = [];

  for (let i = 0; i < candidates.length; i++) {
    const currentCandidate = candidates[i];

    if (currentCandidate === target) {
      results.push([currentCandidate]);
    } else if (currentCandidate < target) {
      const recursiveResults = _optimized(candidates.slice(i), target - currentCandidate);

      recursiveResults.forEach(result => {
        results.push([currentCandidate, ...result]);
      });
    } else {
      break;
    }
  }

  return results;
}

/*
 * https://jsperf.com/combinationsum
 *
 * Lessons learned
 * 1. Don't sort more than you have to
 * 2. Array methods are expensive. If we avoid using `slice` to create a new Array, and instead work with the same array, it is faster
 *
 */

module.exports = {
  combinationSum,
  optimized
}
