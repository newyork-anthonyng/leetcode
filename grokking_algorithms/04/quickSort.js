let i = 0;

function quickSort(array) {
	i++;
	if(array.length < 2) return array;

	let pivot = array[0];
	let less = [];
	let greater = [];

	for(let i = 1; i < array.length; i++) {
		if(array[i] < pivot) {
			less.push(array[i]);
		} else {
			greater.push(array[i]);
		}
	}

	return quickSort(less).concat(pivot, quickSort(greater));
}

//console.log(quickSort([]));
//console.log(i);
//i = 0;
//console.log(quickSort([1]));
//console.log(i);
//i = 0;
//console.log(quickSort([1,2]));
//console.log(i);
//i = 0;
//console.log(quickSort([3,6,10,15,1,2,2]));
//console.log(i);
var array = new Array(1000);
for(let i = 0; i < array.length; i++) {
	array[i] = parseInt(Math.random() * 1000);
}
console.log(quickSort(array));
console.log(i);
