const myModule = require('./');
const {
  twoSum,
  mySolution,
} = myModule;

describe('twoSum', () => {
  it('should handle [2, 7, 11, 15], and target = 9', () => {
    const array = [2, 7, 11, 15];
    const target = 9;

    expect(twoSum(array, target)).toEqual([1, 2]);
  });

  it('should handle [0, 0, 3, 4], and target = 0', () => {
    const array = [0, 0, 3, 4];
    const target = 0;

    expect(twoSum(array, target)).toEqual([1, 2]);
  });

  it('should handle [2, 3, 4], and target = 6', () => {
    const array = [2, 3, 4];
    const target = 6;

    expect(twoSum(array, target)).toEqual([1, 3]);
  });

  it('should handle [5, 25, 75], and target = 100', () => {
    const array = [5, 25, 75];
    const target = 100;

    expect(twoSum(array, target)).toEqual([2, 3]);
  });
});

describe('mySolution', () => {
  it('should handle [2, 7, 11, 15], and target = 9', () => {
    const array = [2, 7, 11, 15];
    const target = 9;

    expect(mySolution(array, target)).toEqual([1, 2]);
  });

  it('should handle [0, 0, 3, 4], and target = 0', () => {
    const array = [0, 0, 3, 4];
    const target = 0;

    expect(mySolution(array, target)).toEqual([1, 2]);
  });

  it('should handle [2, 3, 4], and target = 6', () => {
    const array = [2, 3, 4];
    const target = 6;

    expect(mySolution(array, target)).toEqual([1, 3]);
  });

  it('should handle [5, 25, 75], and target = 100', () => {
     const array = [5, 25, 75];
     const target = 100;

     expect(mySolution(array, target)).toEqual([2, 3]);
   });
});
