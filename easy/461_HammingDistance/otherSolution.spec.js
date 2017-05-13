const hammingDistance = require('./otherSolution');

describe('hammingDistance', () => {
  it('should return correct answer for duplicate inputs', () => {
    const result = 0;

    expect(hammingDistance(4, 4)).toEqual(result);
  });

  it('should return correct answer for 1 and 4', () => {
    const result = 2;

    expect(hammingDistance(1, 4)).toEqual(result);
  });

  it('should return correct answer for 3 and 4', () => {
    const result = 3;

    expect(hammingDistance(3, 4)).toEqual(result);
  });
});
