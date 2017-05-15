const myModule = require('./');
const {
  arrayPartition,
  moreEfficientSolution,
 } = myModule;

describe('arrayPartition', () => {
  it('should work with [1,4,3,2]', () => {
    const array = [1, 4, 3, 2];
    const expected = 4;

    expect(arrayPartition(array)).toEqual(expected);
  });

  it('should work with [3,5,9,4,2,1]', () => {
    const array = [3, 5, 9, 4, 2, 1];
    const expected = 9;

    expect(arrayPartition(array)).toEqual(expected);
  });

  it('should throw error if odd number of elements', () => {
    const array = [3, 5, 9];

    expect(() => {
      arrayPartition(array);
    }).toThrow();
  });

  it('should handle negative numbers', () => {
    const array = [6214, -2290, 2833, -7908];
    const expected = -5075;

    expect(arrayPartition(array)).toEqual(expected);
  });
});

describe('moreEfficientSolution', () => {
  it('should work with [1,4,3,2]', () => {
    const array = [1, 4, 3, 2];
    const expected = 4;

    expect(moreEfficientSolution(array)).toEqual(expected);
  });

  it('should work with [3,5,9,4,2,1]', () => {
    const array = [3, 5, 9, 4, 2, 1];
    const expected = 9;

    expect(moreEfficientSolution(array)).toEqual(expected);
  });

  it('should throw error if odd number of elements', () => {
    const array = [3, 5, 9];

    expect(() => {
      moreEfficientSolution(array);
    }).toThrow();
  });

  it('should handle negative numbers', () => {
    const array = [6214, -2290, 2833, -7908];
    const expected = -5075;

    expect(moreEfficientSolution(array)).toEqual(expected);
  });
});
