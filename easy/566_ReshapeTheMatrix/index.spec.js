const myModule = require('./');
const {
  reshapeMatrix,
  flattenArray,
 } = myModule;

describe('reshapeMatrix', () => {
  it('should return original array if rows and columns are not possible', () => {
    const array = [
      [1, 2, 3],
      [4, 5, 6],
    ];

    expect(reshapeMatrix(array, 5, 5)).toEqual(array);
  });

  it('should transform 2x2 matrix to 1x4 matrix', () => {
    const array = [
      [1, 2],
      [3, 4],
    ];
    const expected = [
      [1, 2, 3, 4],
    ];

    expect(reshapeMatrix(array, 1, 4)).toEqual(expected);
  });
});

describe('flattenArray', () => {
  it('should flatten a 2x2 array', () => {
    const array = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const expected = [1, 2, 3, 4, 5, 6];

    expect(flattenArray(array)).toEqual(expected);
  });

  it('should flatten a 5x2 array', () => {
    const array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
      [13, 14, 15],
    ];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    expect(flattenArray(array)).toEqual(expected);
  });
});
