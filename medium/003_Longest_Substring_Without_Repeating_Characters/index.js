/*
 *Given a string, find the length of the longest substring without repeating characters.

 Examples:

 Given "abcabcbb", the answer is "abc", which the length is 3.

 Given "bbbbb", the answer is "b", with the length of 1.

 Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */
 
 function lengthOfLongestSubstring(s) {
   let maxLength = 0;
   let start = -1;
   const dictionary = {};
   
   for (let i = 0; i < s.length; i++) {
     const currentLetter = s[i];
     
     if (typeof dictionary[currentLetter] !== "undefined") {
       start = Math.max(dictionary[currentLetter], start);
     }
     
     dictionary[currentLetter] = i;
     maxLength = Math.max(i - start, maxLength);
   }
   
   return maxLength;
 }

/*
 * This solution timed out.
 * The nested for-loop makes it slow
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

    // there is no point going to the end of the list
    if (currentWinner > (s.length - i)) {
      break;
    }
  }

  return currentWinner;
}
*/