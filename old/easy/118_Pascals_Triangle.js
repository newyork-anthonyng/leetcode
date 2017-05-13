/*
Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
	var result = [
		[1]
	];
	if(numRows === 0) return [];
	if(numRows === 1) return result;

	for(var i = 0; i < numRows - 1; i++) {
		var previousElement = result[i];
		var currentElement = [];

		for(var j = 0; j < previousElement.length + 1; j++) {
			if(j === 0) {
				currentElement.push(previousElement[j]);
			} else if(j === previousElement.length) {
				currentElement.push(previousElement[j - 1]);
			} else {
				currentElement.push(previousElement[j] + previousElement[j - 1]);
			}
		}
		result.push(currentElement);
	}

	return result;
};

console.log(generate(2));
