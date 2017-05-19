/*
 * Given a string, you need to reverse the order of characters in each word
 * within a sentence while still preserving whitespace and initial word order.
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/#/description
 */

function reverseWords(string) {
  const stringArray = string.split(' ');

  const reverseArray = stringArray.map((word) => {
    return word.split('').reverse().join('');
  });

  return reverseArray.join(' ');
}

/*
 * A variation of my solution without Array.map()
 */
function fasterReverseWords(string) {
  const stringArray = string.split(' ');

  const result = [];
  for (let i = 0; i < stringArray.length; i++) {
    const currentWord = stringArray[i];
    const reversedWord = currentWord.split('').reverse().join('');
    result.push(reversedWord);
  }

  return result.join(' ');
}

/*
 * Alternative solution from LeetCode
 * https://discuss.leetcode.com/topic/87073/javascript-solution-using-two-pointers
 */
var otherSolution = function(s) {
    var words = s.split(' '),
        first,
        last,
        currentWord,
        temp;

    for(var i = 0; i < words.length; i++){
        first = 0;
        currentWord = words[i].split('');
        last = currentWord.length - 1;

        while(first <= last){
            temp = currentWord[first];
            currentWord[first] = currentWord[last];
            currentWord[last] = temp;
            first++;
            last--;
        }

        words[i] = currentWord.join('');
    }

    return words.join(' ');

};

module.exports = {
  reverseWords,
  fasterReverseWords,
  otherSolution,
};

/*
 * Lessons Learned
 *
 * MyOriginalSolution x 152,523 ops/sec ±1.55% (80 runs sampled)
 * Alternative Solution: MyFasterSolution x 219,846 ops/sec ±5.02% (76 runs sampled)
 * Alternative Solution: Not using Array.reverse() x 349,747 ops/sec ±4.12% (75 runs sampled)
 * Fastest is Alternative Solution: Not using Array.reverse()
 * 129% faster
 *
 * Native Array functions have a lot of overhead.
 * But keep in all mind that premature optimization is the root of all evil.
 * These performance gains we see from benchmark are probably not the bottlenecks in your application.
 */
