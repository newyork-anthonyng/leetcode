const myModule = require('./');
const {
  getSum,
  alternativeSolution,
} = myModule;

describe('getSum', () => {
  it('should get sum of 1 and 2', () => {
    const expected = 3;

    expect(getSum(1, 2)).toEqual(expected);
  });
});

describe('alternativeSolution', () => {
  it('should get sum of 1 and 2', () => {
    const expected = 3;

    expect(alternativeSolution(1, 2)).toEqual(expected);
  });
});
