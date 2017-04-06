const { linearSearch } = require('./searchingProblem');

const array = [1, 3, 5, 100];

it('should return the index of number found', () => {
  const value = 5;

  expect(linearSearch(array, value)).toEqual(2);
});

it('should return null if number is not found', () => {
  const value = 6;

  expect(linearSearch(array, value)).toEqual(null);
});
