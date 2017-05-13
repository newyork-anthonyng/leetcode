/*
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	var d = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000
	};

	var num = 0;
	for(var i = s.length - 1; i >= 0; i--) {
		num +=  d[s[i]];
		if(d[s[i]] > d[s[i - 1]]) {
			num -= d[s[i-1]];
			i--;
		}
	}
	return num;
};
