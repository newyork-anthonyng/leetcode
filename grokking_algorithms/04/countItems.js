function countItems(list) {
	if(list[0] === undefined) return 0;

	return 1 + countItems(list.splice(1));
}

console.log(countItems([1, 2, 3, 4]));
