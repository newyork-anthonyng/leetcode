/*
Given two strings s and t which consist of only lowercase letters.

String t is generated by random shuffling string s and then add one more letter at a random position.

Find the letter that was added in t.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
	for(var i = 0; i < s.length; i++) {
		var myIndex = t.indexOf(s[i]);
		t = t.slice(0, myIndex) + t.slice(myIndex + 1);
	}

	return t;
};

console.log(findTheDifference('abcdef', 'gabcdef'));
