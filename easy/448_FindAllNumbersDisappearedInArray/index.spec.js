const myModule = require('./');
const {
  findDisappearedNumbers,
} = myModule;

describe('findDisappearedNumbers', () => {
  it('should give correct result for [4, 3, 2, 7, 8, 2, 3, 1]', () => {
    const array = [4, 3, 2, 7, 8, 2, 3, 1];
    const expected = [5, 6];

    expect(findDisappearedNumbers(array)).toEqual(expected);
  });

  it('should give correct result for [1, 1]', () => {
    const array = [1, 1];
    const expected = [2];

    expect(findDisappearedNumbers(array)).toEqual(expected);
  });
});
