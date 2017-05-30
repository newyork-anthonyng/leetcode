const myModule = require('./');
const {
  findDisappearedNumbers,
  getNumbersFromRange,
  alternateSolution,
} = myModule;

describe('alternateSolution', () => {
  it('should give correct result for [1, 2, 3, 3]', () => {
    const array = [1, 2, 3, 3];
    const expected = [4];

    expect(alternateSolution(array)).toEqual(expected);
  });

  it('should give correct result for [4, 3, 2, 7, 8, 2, 3, 1]', () => {
    const array = [4, 3, 2, 7, 8, 2, 3, 1];
    const expected = [5, 6];

    expect(alternateSolution(array)).toEqual(expected);
  });
});

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

  it('should give correct result for [2, 2]', () => {
    const array = [2, 2];
    const expected = [1];

    expect(findDisappearedNumbers(array)).toEqual(expected);
  });

  it('should give correct result for [1, 1, 2, 4]', () => {
    const array = [1, 1, 2, 4];
    const expected = [3];

    expect(findDisappearedNumbers(array)).toEqual(expected);
  });

});

describe('getNumbersFromRange', () => {
  it('should return array of numbers in range, 5-7', () => {
    const expected = [6];

    expect(getNumbersFromRange(5, 7)).toEqual(expected);
  });

  it('should return array of numbers in range, 5-10', () => {
    const expected = [6, 7, 8, 9];

    expect(getNumbersFromRange(5, 10)).toEqual(expected);
  });
});
