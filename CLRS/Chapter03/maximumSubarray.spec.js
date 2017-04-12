const maxCrossingSubArray = require('./maximumSubarray').maxCrossingSubArray;
const findMaximumSubArray = require('./maximumSubarray').findMaximumSubArray;

describe('maxCrossingSubArray', () => {
  it('should handle crossing subarray', () => {
    const array = [1, -3, 5, 10, -3, 1];
    const expected = {
      sum: 15,
      maxLeft: 2,
      maxRight: 3,
    };

    expect(maxCrossingSubArray(array, 0, 2, 5)).toEqual(expected);
  });
});

describe('findMaximumSubArray', () => {
  it('should find maximum subarray with 2 elements', () => {
    const array = [13, -3];
    const expected = {
      sum: 13,
      maxLeft: 0,
      maxRight: 0,
    };

    expect(findMaximumSubArray(array, 0, array.length - 1)).toEqual(expected);
  });

  it('should find maximum subarray with 3 elements', () => {
    const array = [13, -3, -25, 20];
    const expected = {
      sum: 20,
      maxLeft: 3,
      maxRight: 3,
    };

    expect(findMaximumSubArray(array, 0, array.length - 1)).toEqual(expected);
  });

  it('should find maximum subarray with a lot of elements', () => {
    const array = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];
    const expected = {
      sum: 43,
      maxLeft: 7,
      maxRight: 10,
    };

    expect(findMaximumSubArray(array, 0, array.length - 1)).toEqual(expected);
  });
});
