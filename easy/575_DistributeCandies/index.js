function distributeCandies(candies) {
  const candyTypes = Object.create(null);

  for (let i = 0; i < candies.length; i++) {
    candyTypes[candies[i]] = true;
  }

  return Math.min(
    Object.keys(candyTypes).length,
    (candies.length / 2)
  );
}

/*
 * Alternative solution removes the call to Object.keys()
 */
function alternativeSolution(candies) {
  const candyTypes = Object.create(null);
  let kinds = 0;

  for (let i = 0; i < candies.length; i++) {
    if (!candyTypes[candies[i]]) {
      candyTypes[candies[i]] = true;
      kinds++;
    }
  }

  return Math.min(
    kinds,
    (candies.length / 2)
  )
}

function usingSet(candies) {
  return Math.min(new Set(candies).size, candies.length / 2);
}

module.exports = {
  distributeCandies,
  alternativeSolution,
  usingSet,
};

/*
 * Lessons Learned
 *
 * Look at those benchmarks! The native JavaScript Set is slow. And Object.keys is slow too :(
 *
 * A JavaScript Set lets you store unique values into a hash.
 * Think of it like a JavaScript object, that only has keys.
 *
 * MyOriginalSolution x 433,025 ops/sec ±2.04% (77 runs sampled)
 * AlternativeSolution: Without Object.keys() x 2,081,260 ops/sec ±1.29% (83 runs sampled)
 * AlternativeSolution: Using JavaScript Set x 461,765 ops/sec ±1.43% (85 runs sampled)
 * Fastest is AlternativeSolution: Without Object.keys()
 * 79% faster
 *
 */
