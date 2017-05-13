function maxInList(list) {
	if(list.length === 0) return 0;
	if(list.length === 1) return list[0];

	return Math.max(list[0], maxInList(list.splice(1)));
}

console.log(maxInList([1,2,3,4,5]));
console.log(maxInList([1,2,3,100,4,5]));
