const myModule = require('./');
const {
  findWord,
  findWords,
  regexSolution,
  fasterRegexSolution,
} = myModule;

describe('findWord', () => {
  it('should return true for "Alaska"', () => {
    const word = 'Alaska';

    expect(findWord(word)).toEqual(true);
  });

  it('should return false for "Hello"', () => {
    const word = 'Hello';

    expect(findWord(word)).toEqual(false);
  });

  it('should work with uppercase words', () => {
    const word = 'ALASKA';

    expect(findWord(word)).toEqual(true);
  });
});

describe('findWords', () => {
  it('should work with "Alaska", "Hello", "Peace", and "Dad"', () => {
    const words = ['Hello', 'Alaska', 'Dad', 'Peace'];
    const result = ['Alaska', 'Dad'];

    expect(findWords(words)).toEqual(result);
  });
});

describe('regexSolution', () => {
  it('should work with "Alaska", "Hello", "Peace", and "Dad"', () => {
    const words = ['Hello', 'Alaska', 'Dad', 'Peace'];
    const result = ['Alaska', 'Dad'];

    expect(regexSolution(words)).toEqual(result);
  });
});

describe('fasterRegexSolution', () => {
  it('should work with "Alaska", "Hello", "Peace", and "Dad"', () => {
    const words = ['Hello', 'Alaska', 'Dad', 'Peace'];
    const result = ['Alaska', 'Dad'];

    expect(fasterRegexSolution(words)).toEqual(result);
  });
});
