/*
 * Given two arrays, write a function to compute their intersection.
 *
 * Example:
 * Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
 *
 * Note:
 * Each element in the result must be unique.
 * The result can be in any order.
 */

function intersection(nums1, nums2) {
  const map = {};
  for (let i = 0; i < nums1.length; i++) {
    const currentNum = nums1[i];
    map[currentNum] = true;
  }

  const results = [];
  for (let i = 0; i < nums2.length; i++) {
    const currentNum = nums2[i];
    if (map[currentNum]) {
      results.push(currentNum);
      map[currentNum] = false;
    }
  }

  return results;
}

function setAnswer(nums1, nums2) {
  const set = new Set(nums1);
  const intersectionArray = nums2.filter(n => set.has(n));

  return [...new Set(intersectionArray)];
}

module.exports = {
  intersection,
  setAnswer,
};

/*
 * Lessons learned
 * MyOriginalSolution x 1,630,541 ops/sec ±0.92% (81 runs sampled)
 * Using Sets x 115,014 ops/sec ±1.63% (83 runs sampled)
 * Fastest is MyOriginalSolution
 * 1317% faster
 *
 * Using JavaScript Sets are more expensive than Arrays
 */
