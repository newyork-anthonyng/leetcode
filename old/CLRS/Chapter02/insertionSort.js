const insertionSort = (array) => {
  const newArray = array.slice(0);

  for (let i = 1; i < newArray.length; i++) {
    const current = newArray[i];

    let j = i - 1;
    while (j >= 0 && current < newArray[j]) {
      newArray[j + 1] = newArray[j];
      j--;
    }
    newArray[j + 1] = current;
  }

  return newArray;
};

const decreasingInsertionSort = (array) => {
  const newArray = array.slice(0);

  for (let i = 1; i < newArray.length; i++) {
    const current = newArray[i];

    let j = i - 1;
    while (j >= 0 && current > newArray[j]) {
      newArray[j + 1] = newArray[j];
      j--;
    }
    newArray[j + 1] = current;
  }

  return newArray;
};

module.exports = {
  insertionSort,
  decreasingInsertionSort,
};
