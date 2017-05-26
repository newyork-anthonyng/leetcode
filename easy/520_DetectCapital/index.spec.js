const myModule = require('./');
const {
  detectCapitalUse,
  isUppercase,
  alternativeSolution,
  regexAnswer,
} = myModule;

describe('isUppercase', () => {
  it('should return true for "A"', () => {
    const letter = 'A';

    expect(isUppercase(letter)).toEqual(true);
  });

  it('should return false for "a"', () => {
    const letter = 'a';

    expect(isUppercase(letter)).toEqual(false);
  });
});

describe('detectCapitalUse', () => {
  it('should return true for one letter strings', () => {
    const word = 'a';

    expect(detectCapitalUse(word)).toEqual(true);
  });

  it('should return true for USA', () => {
    const word = 'USA';

    expect(detectCapitalUse(word)).toEqual(true);
  });

  it('should return true for Google', () => {
    const word = 'Google';

    expect(detectCapitalUse(word)).toEqual(true);
  });

  it('should return true for leetcode', () => {
    const word = 'leetcode';

    expect(detectCapitalUse(word)).toEqual(true);
  });

  it('should return false for GOogle', () => {
    const word = 'GOogle';

    expect(detectCapitalUse(word)).toEqual(false);
  });

  it('should return false for gOOGLE', () => {
    const word = 'gOOGLE';

    expect(detectCapitalUse(word)).toEqual(false);
  });
});

describe('alternativeSolution', () => {
  it('should return true for one letter strings', () => {
    const word = 'a';

    expect(alternativeSolution(word)).toEqual(true);
  });

  it('should return true for USA', () => {
    const word = 'USA';

    expect(alternativeSolution(word)).toEqual(true);
  });

  it('should return true for Google', () => {
    const word = 'Google';

    expect(alternativeSolution(word)).toEqual(true);
  });

  it('should return true for leetcode', () => {
    const word = 'leetcode';

    expect(alternativeSolution(word)).toEqual(true);
  });

  it('should return false for GOogle', () => {
    const word = 'GOogle';

    expect(alternativeSolution(word)).toEqual(false);
  });

  it('should return false for gOOGLE', () => {
    const word = 'gOOGLE';

    expect(alternativeSolution(word)).toEqual(false);
  });
});

describe('regexAnswer', () => {
  it('should return true for one letter strings', () => {
    const word = 'a';

    expect(regexAnswer(word)).toEqual(true);
  });

  it('should return true for USA', () => {
    const word = 'USA';

    expect(regexAnswer(word)).toEqual(true);
  });

  it('should return true for Google', () => {
    const word = 'Google';

    expect(regexAnswer(word)).toEqual(true);
  });

  it('should return true for leetcode', () => {
    const word = 'leetcode';

    expect(regexAnswer(word)).toEqual(true);
  });

  it('should return false for GOogle', () => {
    const word = 'GOogle';

    expect(regexAnswer(word)).toEqual(false);
  });

  it('should return false for gOOGLE', () => {
    const word = 'gOOGLE';

    expect(regexAnswer(word)).toEqual(false);
  });
});
