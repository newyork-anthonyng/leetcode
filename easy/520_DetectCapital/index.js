/*
 * https://leetcode.com/problems/detect-capital/#/description
 * Given a word, you need to judge whether the usage of capitals in it is right or not.
 *
 * We define the usage of capitals in a word to be right when one of the following cases holds:
 *
 * All letters in this word are capitals, like "USA".
 * All letters in this word are not capitals, like "leetcode".
 * Only the first letter in this word is capital if it has more than one letter, like "Google".
 * Otherwise, we define that this word doesn't use capitals in a right way.
 */

function detectCapitalUse(word) {
  if (word.length === 1) return true;

  const firstLetter = isUppercase(word[0]);
  const restOfWord = isUppercase(word[1]);

  for (let i = 2; i < word.length; i++) {
    const currentLetter = word[i];

    if (isUppercase(currentLetter) !== restOfWord) {
      return false;
    }
  }

  return (
    (firstLetter && restOfWord) || // all capitalized
    (firstLetter && !restOfWord) || // first letter capitalized
    (!firstLetter && !restOfWord) // all lowercase
  );
}

function alternativeSolution(word) {
  if (word.length === 1) return true;

  const firstLetter = regexUppercase(word[0]);
  const restOfWord = regexUppercase(word[1]);

  for (let i = 2; i < word.length; i++) {
    const currentLetter = word[i];

    if (regexUppercase(currentLetter) !== restOfWord) {
      return false;
    }
  }

  return (
    (firstLetter && restOfWord) || // all capitalized
    (firstLetter && !restOfWord) || // first letter capitalized
    (!firstLetter && !restOfWord) // all lowercase
  );
}

function regexUppercase(letter) {
  return /[A-Z]/.test(letter);
}

function isUppercase(letter) {
  return letter === letter.toUpperCase();
}

// https://discuss.leetcode.com/topic/80546/intuitive-javascript-solution
// Only using regex
function regexAnswer(word) {
  return /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/.test(word);
}

module.exports = {
  detectCapitalUse,
  isUppercase,
  alternativeSolution,
  regexAnswer,
};

/*
 * Lessons learned
 *
 *
 * MyOriginalSolution x 1,365,957 ops/sec ±0.62% (87 runs sampled)
 * Alternative Solution: Use regex to test for uppercase x 1,054,865 ops/sec ±1.09% (84 runs sampled)
 * Alternative Solution: Using only Regex x 5,600,337 ops/sec ±1.20% (81 runs sampled)
 * Fastest is Alternative Solution: Using only Regex
 * 430% faster
 *
 * Using Regex to do an uppercase check is slower than using String.toUpperCase().
 *
 * Using the only Regex example is the fastest.
 * Why? My guess is the lack of a for-loop.
 */
