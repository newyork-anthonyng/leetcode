/*
 *Given a string, find the length of the longest substring without repeating characters.

 Examples:

 Given "abcabcbb", the answer is "abc", which the length is 3.

 Given "bbbbb", the answer is "b", with the length of 1.

 Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

function lengthOfLongestSubstring(s) {
  let currentWinner = 0;

  for (let i = 0; i < s.length; i++) {
    const obj = {};

    let currentCandidate = 0;
    for (let j = i; j < s.length; j++) {
      const currentLetter = s[j];
      if (obj[currentLetter] !== undefined) {
        break;
      } else {
        obj[currentLetter] = true;
        currentCandidate += 1;
      }
    }

    currentWinner = Math.max(currentCandidate, currentWinner);
  }

  return currentWinner;
}
