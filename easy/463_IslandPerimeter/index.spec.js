const myModule = require('./');
const {
  islandPerimeter,
  checkSurroundingSquares,
} = myModule;

describe('islandPerimeter', () => {
  it('should handle square with no neighbors', () => {
    const grid = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    const square = {
      row: 1,
      col: 1,
    };

    expect(checkSurroundingSquares(square, grid)).toEqual(4);
  });

  it('should handle square that is completely surrounded', () => {
    const grid = [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ];
    const square = {
      row: 1,
      col: 1,
    };

    expect(checkSurroundingSquares(square, grid)).toEqual(0);
  });

  it('should handle square that is on the edge of grid', () => {
    const grid = [
      [0, 1, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    const square = {
      row: 0,
      col: 1,
    };

    expect(checkSurroundingSquares(square, grid)).toEqual(4);
  });

  it('should handle square with diagonal neighbors', () => {
    const grid = [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1],
    ];
    const square = {
      row: 1,
      col: 1,
    };

    expect(checkSurroundingSquares(square, grid)).toEqual(4);
  });

  it('should return 0 if square is not occupied', () => {
    const grid = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];
    const square = {
      row: 1,
      col: 1,
    };

    expect(checkSurroundingSquares(square, grid)).toEqual(0);
  });

  it('should return correct answer with 4x4 grid', () => {
    const grid = [
      [0,1,0,0],
      [1,1,1,0],
      [0,1,0,0],
      [1,1,0,0],
    ];
    const square = {
      row: 1,
      col: 2,
    };

    expect(checkSurroundingSquares(square, grid)).toEqual(3);
  });
});

describe('islandPerimeter', () => {
  it('should handle grid', () => {
    const grid = [
      [0,1,0,0],
      [1,1,1,0],
      [0,1,0,0],
      [1,1,0,0],
    ];

    expect(islandPerimeter(grid)).toEqual(16);
  });
});
