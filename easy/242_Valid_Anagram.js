/*
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// this code timed out when working with a large string. I'm suspecting that "splice" is the culprit.
//var isAnagram = function(s, t) {
//	if(s.length !== t.length) return false;
//
//	var remaining = t.split('');
//	for(var i = 0; i < s.length; i++) {
//		var currentLetter = s[i];
//		var letterIndex = remaining.indexOf(currentLetter);
//
//		if(letterIndex === -1) {
//			return false;
//		} else {
//			remaining.splice(letterIndex, 1);
//		}
//	}
//
//	return true;
//}

var isAnagram = function(s, t) {
	if(s.length !== t.length) return false;

	var array = [];
	for(var i = 0; i < 26; i++) {
		array[i] = 0;
	}

	for(var i = 0; i < s.length; i++) {
		array[(s.charCodeAt(i) - 'a'.charCodeAt(0))]++;
		array[(t.charCodeAt(i) - 'a'.charCodeAt(0))]--;
	}

	for(var i = 0; i < array.length; i++) {
		if(array[i] !== 0) return false;
	}
	return true;
}

console.log(isAnagram('car', 'rat'));
console.log(isAnagram('anagram', 'nagaram'));
