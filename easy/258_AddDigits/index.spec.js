const myModule = require('./');
const {
  addDigits,
  alternativeSolution,
} = myModule;

describe('addDigits', () => {
  it('should return correct answer for 38', () => {
    const number = 38;
    const answer = 2;

    expect(addDigits(number)).toEqual(answer);
  });
});

describe('alternativeSolution', () => {
  it('should return correct answer for 38', () => {
    const number = 38;
    const answer = 2;

    expect(alternativeSolution(number)).toEqual(answer);
  });
});
