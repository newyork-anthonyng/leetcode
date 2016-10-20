function isUnique(word) {
	let letterTracker = {};

	for(let i = 0; i < word.length; i++) {
		const currentLetter = word[i];
		if(letterTracker[currentLetter]) {
			return false;
		} else {
			letterTracker[currentLetter] = true;
		}
	}

	return true;
}

//console.log(isUnique('abc'));
//console.log(isUnique('abdcea'));

function reverseString(word) {
	return word.split('').reverse().join('');
}

//console.log(reverseString('abcdef'));

function removeDuplicates(word) {
	let wordArray = word.split('');

	let tracker = {};
	let i = 0;

	while(i < wordArray.length) {
		let currentLetter = wordArray[i];
		if(tracker[currentLetter]) {
			wordArray.splice(i, 1);
		} else {
			tracker[currentLetter] = true;
			i++;
		}
	}

	return wordArray.join('');
}

//console.log(removeDuplicates('abc'));
//console.log(removeDuplicates('aaaaabcdeeeeef'));

function isAnagram(word1, word2) {
	if(word1.length !== word2.length) return false;

	let firstWord = word1.split('');
	let secondWord = word2.split('');

	while(true) {
		let currentLetter = firstWord[0];
		if(currentLetter === undefined) return true;

		let index = secondWord.indexOf(currentLetter);

		if(index !== -1) {
			firstWord.splice(0, 1);
			secondWord.splice(index, 1);
		} else {
			return false;
		}
	}
}

//console.log(isAnagram('abc', 'def'));
//console.log(isAnagram('fed', 'def'));
//console.log(isAnagram('aaaaaaaa', 'aaaa'));

function replaceSpace(word) {
	return word.split(' ').join('%20');
}

//console.log(replaceSpace('abc'));
//console.log(replaceSpace('abc deffff gg'));

function rotateMatrixByNinety(matrix) {
	let newMatrix = [];
	for(let i = 0; i < matrix.length; i++) {
		newMatrix.push([]);
	}
	console.log(newMatrix);

	for(let row = 0; row < matrix.length; row++) {
		for(let col = 0; col < matrix[row].length; col++) {
			let currentItem = matrix[row][col];

			newMatrix[col].unshift(currentItem);
		}
	}

	return newMatrix;
}

//let matrix = [
//	[1,2,3],
//	[4,5,6],
//	[7,8,9]
//];
//console.log(rotateMatrixByNinety(matrix));
//matrix = [
//	[1,2,3,4],
//	[5,6,7,8],
//	[9,10,11,12],
//	[13,14,15,16]
//];
//console.log(rotateMatrixByNinety(matrix));

function replaceZeroes(matrix) {
	let newMatrix = arrayClone(matrix);

	for(let row = 0; row < newMatrix.length; row++) {
		for(let col = 0; col < newMatrix[row].length; col++) {

			if(matrix[row][col] === 0) {
				// clear out row
				newMatrix[row].fill(0);

				// clear out columns
				for(let i = 0; i < newMatrix.length; i++) {
					newMatrix[i][col] = 0;
				}
			}
		}
	}

	return newMatrix;
}

function arrayClone( arr ) {
	var i, copy;

	if( Array.isArray( arr ) ) {
		copy = arr.slice( 0 );
		for( i = 0; i < copy.length; i++ ) {
			copy[ i ] = arrayClone( copy[ i ] );
		}
		return copy;
		} else if( typeof arr === 'object' ) {
			throw 'Cannot clone array containing an object!';
		} else {
			return arr;
	}
}

let matrix = [
	[1,2,0],
	[2,3,4],
	[4,5,6]
];
//console.log(replaceZeroes(matrix));

function isRotated(word1, word2) {
	if(typeof word1 !== 'string' || typeof word2 !== 'string') throw new TypeError('Expected string arguments in isRotated');
	const newWord = word2 + word2;

	return isSubstring(newWord, word1);
}

function isSubstring(word1, word2) {
	return word1.indexOf(word2) !== -1;
}

//console.log(isRotated('apple', 'pleap'));
//console.log(isRotated('apple', 'ppale'));
