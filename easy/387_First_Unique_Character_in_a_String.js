/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	for(var i = 0; i < s.length; i++) {
		var currentLetter = s[i];
		var isUnique = s.indexOf(currentLetter) === s.lastIndexOf(currentLetter);

		if(isUnique) {
			return i;
		}
	}

	return -1;
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
