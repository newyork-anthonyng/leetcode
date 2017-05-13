const { insertionSort, decreasingInsertionSort } = require('./insertionSort');

it('should sort array into non-increasing order', () => {
  const array = [5, 3, 8, 1, 2];
  const expected = [1, 2, 3, 5, 8];

  expect(insertionSort(array)).toEqual(expected);
});


it('should sort array into non-decreasing order', () => {
  const array = [5, 3, 8, 1, 2];
  const expected = [8, 5, 3, 2, 1];

  expect(decreasingInsertionSort(array)).toEqual(expected);
});
