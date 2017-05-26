const myModule = require('./');
const {
  singleNumber,
  alternativeSolution,
  noExtraMemory,
  xorSolution,
} = myModule;

describe('singleNumber', () => {
  it('should return correct answer for [0, 0, 2, 2, 3, 3, 4, 5, 4]', () => {
    const array = [0, 0, 2, 2, 3, 3, 4, 5, 4];

    expect(singleNumber(array)).toEqual(5);
  });

  it('should return correct answer for [1]', () => {
    const array = [1];

    expect(singleNumber(array)).toEqual(1);
  });
});

describe('alternativeSolution', () => {
    it('should return correct answer for [0, 0, 2, 2, 3, 3, 4, 5, 4]', () => {
          const array = [0, 0, 2, 2, 3, 3, 4, 5, 4];

          expect(alternativeSolution(array)).toEqual(5);
        });

    it('should return correct answer for [1]', () => {
          const array = [1];

          expect(alternativeSolution(array)).toEqual(1);
        });
});

describe('noExtraMemory', () => {
    it('should return correct answer for [0, 0, 2, 2, 3, 3, 4, 5, 4]', () => {
          const array = [0, 0, 2, 2, 3, 3, 4, 5, 4];

          expect(noExtraMemory(array)).toEqual(5);
        });

    it('should return correct answer for [1]', () => {
          const array = [1];

          expect(noExtraMemory(array)).toEqual(1);
        });
});

describe('xorSolution', () => {
    it('should return correct answer for [0, 0, 2, 2, 3, 3, 4, 5, 4]', () => {
          const array = [0, 0, 2, 2, 3, 3, 4, 5, 4];

          expect(xorSolution(array)).toEqual(5);
        });

    it('should return correct answer for [1]', () => {
          const array = [1];

          expect(xorSolution(array)).toEqual(1);
        });
});
