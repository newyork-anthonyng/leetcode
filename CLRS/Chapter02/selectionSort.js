const selectionSort = (array) => {
  const newArray = array.slice(0);

  for (let i = 0; i < newArray.length - 1; i++) {
    const current = newArray[i];

    // find smallest element in subarray[i, n]
    let smallestIndex = i;
    for (let j = i + 1; j < newArray.length; j++) {
      if (newArray[j] < newArray[smallestIndex]) {
        smallestIndex = j;
      }
    }
    newArray[i] = newArray[smallestIndex];
    newArray[smallestIndex] = current;
  }

  return newArray;
};

module.exports = {
  selectionSort,
};
