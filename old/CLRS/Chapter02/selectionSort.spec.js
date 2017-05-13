const { selectionSort } = require('./selectionSort');

it('should sort array', () => {
  const array = [5, 2, 10, 8, 15];
  const expected = [2, 5, 8, 10, 15];

  expect(selectionSort(array)).toEqual(expected);
});
