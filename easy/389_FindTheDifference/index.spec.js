const myModule = require('./');
const {
  findTheDifference,
  alternativeSolution,
  bitwiseSolution,
} = myModule;

describe('findTheDifference', () => {
  it('should find answer for "abcd" and "abcde"', () => {
    const s = 'abcd';
    const t = 'abcde';
    const expected = 'e';

    expect(findTheDifference(s, t)).toEqual(expected);
  });
});

describe('alternativeSolution', () => {
  it('should find answer for "abcd" and "abcde"', () => {
    const s = 'abcd';
    const t = 'abcde';
    const expected = 'e';

    expect(alternativeSolution(s, t)).toEqual(expected);
  });
});

describe('bitwiseSolution', () => {
  it('should find answer for "abcd" and "abcde"', () => {
    const s = 'abcd';
    const t = 'abcde';
    const expected = 'e';

    expect(bitwiseSolution(s, t)).toEqual(expected);
  });
});
