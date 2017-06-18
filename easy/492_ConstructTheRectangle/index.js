/*
 * https://leetcode.com/problems/construct-the-rectangle/#/description
 *
 * For a web developer, it is very important to know how to design a web page's size. So, given a specific rectangular web
 * page’s aqea, your job by now is to design a rectangular web page, whose length L and width W satisfy the following
 * requirements:
 *
 * 1. The area of the rectangular web page you designed must equal to the given target area.
 *
 * 2. The width W should not be larger than the length L, which means L >= W.
 *
 * 3. The difference between length L and width W should be as small as possible.
 */

function constructRectangle(area) {
  const midpoint = parseInt(Math.sqrt(area));

  for (let i = midpoint; i > 0; i--) {
    if (area % i === 0) {
      const otherMeasurement = area / i;
      const length = Math.max(otherMeasurement, i);
      const width = Math.min(otherMeasurement, i);
      return [length, width];
    }
  }
}

function alternateSolution(area) {
  for (let i = parseInt(Math.sqrt(area)); i >= 1; i--) {
    if (area % i === 0) return [area / i, i];
  }
}

module.exports = {
  constructRectangle,
  alternateSolution,
};

/*
 * Lessons learned
 *
 * MyOriginalSolution x 10,285,546 ops/sec ±2.18% (77 runs sampled)
 * Alternate Solution x 10,498,492 ops/sec ±2.29% (79 runs sampled)
 * Fastest is Alternate Solution,MyOriginalSolution
 * 2% faster
 *
 * My solution was 20% slower. I removed an unnecessary if/else statement to improve performance.
 * The performance difference is negligible.
 *
 */
