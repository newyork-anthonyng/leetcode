function sum(array) {
	if(array.length === 0) return 0;
	if(array.length === 1) return array[0];

	return array[array.length - 1] + sum(array.slice(0, array.length - 1));
}

console.log(sum([2,4,6]));
