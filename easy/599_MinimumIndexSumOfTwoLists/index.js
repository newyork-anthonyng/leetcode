/*
 * https://leetcode.com/problems/minimum-index-sum-of-two-lists/#/description
 *
 * Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.
 *
 * You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.
 */

function findRestaurant(list1, list2) {
  let results = [];
  let lowestIndex = list1.length + list2.length;

  const firstList = {};
  for (let i = 0; i < list1.length; i++) {
    firstList[list1[i]] = i;
  }

  for (let i = 0; i < list2.length; i++) {
    const currentRestaurant = list2[i];
    const otherIndex = firstList[currentRestaurant];
    const newAnswer = otherIndex + i;

    if (newAnswer < lowestIndex) {
      lowestIndex = newAnswer;
      results = [currentRestaurant];
    } else if (newAnswer === lowestIndex) {
      results.push(currentRestaurant);
    }
  }

  return results;
}

// https://discuss.leetcode.com/topic/91123/intuitive-javascript-solution
// Alternate answer
function alternateSolution(list1, list2) {
    const commonInterest = [];

    list1.forEach((res, index1) => {
        const index2 = list2.indexOf(res);

        // collect an array of common interests with index sum as index
        if (index2 !== -1) {
            const indexSum = index1 + index2;

            if (!commonInterest[indexSum]) commonInterest[indexSum] = [];
            commonInterest[indexSum].push(res);
        }
    });

    // return the common interests with the minimum index sum
    for (let i = 0; i < commonInterest.length; i++)
        if (commonInterest[i]) return commonInterest[i];
}

module.exports = {
  findRestaurant,
  alternateSolution,
};

/*
 * Lessons learned
 *
 * MyAnswer x 1,270,867 ops/sec ±1.81% (82 runs sampled)
 * Alternative Solution x 1,467,140 ops/sec ±2.04% (82 runs sampled)
 * Fastest is Alternative Solution
 * 15% faster
 *
 * The alternate solution is really interesting.
 * It uses an array of an array.
 * This might be useful in the future, when you need to keep a collection of values based on a certain index.
 */
