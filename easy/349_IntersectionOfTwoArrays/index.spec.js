const myModule = require('./');
const {
  intersection,
  setAnswer,
} = myModule;

describe('intersection', () => {
  it('should handle [1, 2, 2, 1], [2, 2]', () => {
    const array1 = [1, 2, 2, 1];
    const array2 = [2, 2];
    const result = [2];

    expect(intersection(array1, array2)).toEqual(result);
  });

  it('should handle [], []', () => {
    const array1 = [];
    const array2 = [];
    const result = [];

    expect(intersection(array1, array2)).toEqual(result);
  });
});

describe('setAnswer', () => {
  it('should handle [1, 2, 2, 1], [2, 2]', () => {
    const array1 = [1, 2, 2, 1];
    const array2 = [2, 2];
    const result = [2];

    expect(setAnswer(array1, array2)).toEqual(result);
  });

  it('should handle [], []', () => {
    const array1 = [];
    const array2 = [];
    const result = [];

    expect(setAnswer(array1, array2)).toEqual(result);
  });
});
