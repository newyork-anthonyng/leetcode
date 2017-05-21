const myModule = require('./');
const {
  reverseString,
  fasterSolution,
  alternativeSolution,
} = myModule;

describe('reverseString', () => {
  it('should handle "hello"', () => {
    const word = 'hello';
    const expected = 'olleh';

    expect(reverseString(word)).toEqual(expected);
  });
});

describe('fasterSolution', () => {
  it('should handle "hello"', () => {
    const word = 'hello';
    const expected = 'olleh';

    expect(fasterSolution(word)).toEqual(expected);
  });
});

describe('alternativeSolution', () => {
  it('should handle "hello"', () => {
    const word = 'hello';
    const expected = 'olleh';

    expect(alternativeSolution(word)).toEqual(expected);
  });
});
