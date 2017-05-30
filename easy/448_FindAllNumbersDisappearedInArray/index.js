/*
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/#/description
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 *
 * Find all the elements of [1, n] inclusive that do not appear in this array.
 *
 * Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
 */

function findDisappearedNumbers(nums) {
  const myArray = nums.sort((a, b) => a - b)
    .filter((num, i, array) => array.lastIndexOf(num) === i);

  console.log('array', myArray);

  const result = [];
  for (let i = 1; i <= nums.length; i++) {
    if (myArray.indexOf(i) === -1) {
      result.push(i);
    }
  }

  return result;
}

module.exports = {
  findDisappearedNumbers,
};
