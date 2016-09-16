/*
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".

Note:
The vowels does not include the letter "y".
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
	var wordArray = s.split('');
	var allVowels = ['a', 'e', 'i', 'o', 'u'];
	var myVowels = [];

	for(var i = 0; i < wordArray.length; i++) {
		var currentLetter = wordArray[i];
		if(isVowel(currentLetter)) {
			myVowels.push(currentLetter);
		}
	}

	for(var i = 0; i < wordArray.length; i++) {
		var currentLetter = wordArray[i];
		if(isVowel(currentLetter)) {
			var replacementVowel = myVowels.pop();
			wordArray.splice(i, 1, replacementVowel);
		}
	}

	return wordArray.join('');
};

function isVowel(s) {
	var allVowels = ['a', 'e', 'i', 'o', 'u'];
	return allVowels.indexOf(s.toLowerCase()) !== -1;
}

var s = 'hello';
console.log(reverseVowels(s));
s = 'leetcode';
console.log(reverseVowels(s));
s = 'aA';
console.log(reverseVowels(s));
