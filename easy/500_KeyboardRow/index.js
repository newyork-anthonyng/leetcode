/*
 * https://leetcode.com/problems/keyboard-row/#/description
 *
 * Given a List of words, return the words that can be typed using letters of
 * alphabet on only one row's of American keyboard like the image below.
 */

const firstRow = {
  q: true,
  w: true,
  e: true,
  r: true,
  t: true,
  y: true,
  u: true,
  i: true,
  o: true,
  p: true,
};
const secondRow = {
  a: true,
  s: true,
  d: true,
  f: true,
  g: true,
  h: true,
  j: true,
  k: true,
  l: true,
};
const thirdRow = {
  z: true,
  x: true,
  c: true,
  v: true,
  b: true,
  n: true,
  m: true,
};
const rows = [firstRow, secondRow, thirdRow];

function findWords(words) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (findWord(words[i])) {
      result.push(words[i]);
    }
  }

  return result;
}

function findWord(string) {
  const lowercaseWord = string.toLowerCase();
  let selectedRow;

  for (let i = 0; i < rows.length; i++) {
    const currentRow = rows[i];
    if (currentRow[lowercaseWord[0]]) {
      selectedRow = currentRow;
    }
  }

  for (let i = 1; i < lowercaseWord.length; i++) {
    if (!selectedRow[lowercaseWord[i]]) {
      return false;
    }
  }

  return true;
}

/*
 * Alternative solution that uses Regular Expressions
 */
function regexSolution(words) {
  return words.filter((w) => {
      if (
          !/^[qwertyuiop]*$/i.test(w) &&
          !/^[asdfghjkl]*$/i.test(w) &&
          !/^[zxcvbnm]*$/i.test(w)
      ) return false;

      return true;
  });
}

function fasterRegexSolution(words) {
  const results = [];

  for (let i = 0; i < words.length; i++) {
    if (
      !(
        !/^[qwertyuiop]*$/i.test(words[i]) &&
        !/^[asdfghjkl]*$/i.test(words[i]) &&
        !/^[zxcvbnm]*$/i.test(words[i])
       )
    ) {
      results.push(words[i]);
    }
  }

  return results;

}

module.exports = {
  findWord,
  findWords,
  regexSolution,
  fasterRegexSolution,
};

/*
 * Lessons learned
 *
 * Using "return words.filter(findWord)" makes the solution 60% slower
 *
 * MyOriginalSolution x 321,240 ops/sec ±1.78% (79 runs sampled)
 * Alternative Solution: regexSolution x 327,079 ops/sec ±2.10% (76 runs sampled)
 * Alternative Solution: fasterRegexSolution x 889,651 ops/sec ±2.10% (77 runs sampled)
 * Fastest is Alternative Solution: fasterRegexSolution
 * 176% faster
 *
 * I liked my solution to create the firstRow, secondRow, thirdRow variables. These are static
 * variables and need only be declared once.
 *
 * The Regex solution is also very elegant. I wonder if removing the Array.filter() would make it faster.
 * Update: It does! Removing the Array.filter() makes it 100% faster!
 *
 * Possible reasons why my solution is slower?
 * Using String.toLowerCase() method
 * Extra function call to "findWord()"
 *
 * Accessing an object is quick. But not as quick as using a
 * RegularExpression on an entire word in one operation.
 */
