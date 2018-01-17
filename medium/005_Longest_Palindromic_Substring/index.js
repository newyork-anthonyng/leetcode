/*
  Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

  Example:

  Input: "babad"

  Output: "bab"

  Note: "aba" is also a valid answer.
  Example:

  Input: "cbbd"

  Output: "bb"
*/

function longestPalindrome(s) {
  let maxPalindrome = "";


  for (let index = 0; index < s.length; index++) {
    let candidatePalindrome = extendPalindrome(s, index, index);
    maxPalindrome = candidatePalindrome.length > maxPalindrome.length ? candidatePalindrome : maxPalindrome;

    // check for even-lettered palindromes
    if (s[index] === s[index + 1]) {
      candidatePalindrome = extendPalindrome(s, index, index + 1);
      maxPalindrome = candidatePalindrome.length > maxPalindrome.length ? candidatePalindrome : maxPalindrome;
    }
  }

  return maxPalindrome;
}

function extendPalindrome(string, startIndex, endIndex) {
  if (string[startIndex - 1] === string[endIndex + 1] && string[endIndex -1 ] !== undefined) {
    return extendPalindrome(string, startIndex - 1, endIndex + 1);
  }

  return string.slice(startIndex, endIndex + 1);
}

module.exports = {
  longestPalindrome
};
