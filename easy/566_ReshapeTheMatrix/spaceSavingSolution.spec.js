const myModule = require('./spaceSavingSolution');
const { spaceSavingSolution } = myModule;

describe('reshapeMatrix', () => {
  it('should return original array if rows and columns are not possible', () => {
    const array = [
      [1, 2, 3],
      [4, 5, 6],
    ];

    expect(spaceSavingSolution(array, 5, 5)).toEqual(array);
  });

  it('should transform 2x2 matrix to 1x4 matrix', () => {
    const array = [
      [1, 2],
      [3, 4],
    ];
    const expected = [
      [1, 2, 3, 4],
    ];

    expect(spaceSavingSolution(array, 1, 4)).toEqual(expected);
  });
});
