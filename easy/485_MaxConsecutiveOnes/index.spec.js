const myModule = require('./');
const {
  maxConsecutiveOnes,
  alternativeSolution,
  arraySolution,
} = myModule;

describe('maxConsecutiveOnes', () => {
  it('should return correct answer for [1, 1, 0, 1, 1, 1]', () => {
    const array = [1, 1, 0, 1, 1, 1];

    expect(maxConsecutiveOnes(array)).toEqual(3);
  });

  it('should return correct answer for [1, 1, 1, 0, 0, 1, 1]', () => {
    const array = [1, 1, 1, 0, 1, 1];

    expect(maxConsecutiveOnes(array)).toEqual(3);
  });

  it('should return correct answer for all zeroes', () => {
    const array = [0, 0, 0, 0, 0, 0];

    expect(maxConsecutiveOnes(array)).toEqual(0);
  });

  it('should return correct answer for all ones', () => {
    const array = [1, 1, 1, 1, 1];

    expect(maxConsecutiveOnes(array)).toEqual(5);
  });
});

describe('alternativeSolution', () => {
  it('should return correct answer for [1, 1, 0, 1, 1, 1]', () => {
    const array = [1, 1, 0, 1, 1, 1];

    expect(alternativeSolution(array)).toEqual(3);
  });

  it('should return correct answer for [1, 1, 1, 0, 0, 1, 1]', () => {
    const array = [1, 1, 1, 0, 1, 1];

    expect(alternativeSolution(array)).toEqual(3);
  });

  it('should return correct answer for all zeroes', () => {
    const array = [0, 0, 0, 0, 0, 0];

    expect(alternativeSolution(array)).toEqual(0);
  });

  it('should return correct answer for all ones', () => {
    const array = [1, 1, 1, 1, 1];

    expect(alternativeSolution(array)).toEqual(5);
  });
});

describe('arraySolution', () => {
  it('should return correct answer for [1, 1, 0, 1, 1, 1]', () => {
    const array = [1, 1, 0, 1, 1, 1];

    expect(arraySolution(array)).toEqual(3);
  });

  it('should return correct answer for [1, 1, 1, 0, 0, 1, 1]', () => {
    const array = [1, 1, 1, 0, 1, 1];

    expect(arraySolution(array)).toEqual(3);
  });

  it('should return correct answer for all zeroes', () => {
    const array = [0, 0, 0, 0, 0, 0];

    expect(arraySolution(array)).toEqual(0);
  });

  it('should return correct answer for all ones', () => {
    const array = [1, 1, 1, 1, 1];

    expect(arraySolution(array)).toEqual(5);
  });
});
