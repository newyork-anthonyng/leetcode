const myModule = require('./');
const {
  reverseWords,
  fasterReverseWords,
  otherSolution,
} = myModule;

describe('reverseWords', () => {
  it(`should work with 'Let's take LeetCode contest'`, () => {
    const word = `Let's take LeetCode contest`;
    const expected = `s'teL ekat edoCteeL tsetnoc`;

    expect(reverseWords(word)).toEqual(expected);
  });
});

describe('fasterReverseWords', () => {
  it(`should work with 'Let's take LeetCode contest'`, () => {
    const word = `Let's take LeetCode contest`;
    const expected = `s'teL ekat edoCteeL tsetnoc`;

    expect(fasterReverseWords(word)).toEqual(expected);
  });
});


describe('otherSolution', () => {
  it(`should work with 'Let's take LeetCode contest'`, () => {
    const word = `Let's take LeetCode contest`;
    const expected = `s'teL ekat edoCteeL tsetnoc`;

    expect(otherSolution(word)).toEqual(expected);
  });
});
