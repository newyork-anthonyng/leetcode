const myModule = require('./alternativeSolution');
const {
  alternativeSolution,
  navigateHorizontalVertices,
  navigateVerticalVertices,
} = myModule;

describe('navigateHorizontalVertices', () => {
  it('should handle blank grid', () => {
    const grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    expect(navigateHorizontalVertices(grid)).toEqual(0);
  });

  it('should handle grid with occupied cells', () => {
    const grid = [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    expect(navigateHorizontalVertices(grid)).toEqual(8);
  });

  it('should handle grid with occupied edges on the top row', () => {
    const grid = [
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    expect(navigateHorizontalVertices(grid)).toEqual(8);
  });

  it('should handle grid with occupied edges on the bottom row', () => {
    const grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 1, 1, 1],
    ];

    expect(navigateHorizontalVertices(grid)).toEqual(8);
  });
});

describe('navigateVerticalVertices', () => {
  it('should handle blank grid', () => {
    const grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    expect(navigateVerticalVertices(grid)).toEqual(0);
  });

  it('should handle grid with occupied cells', () => {
    const grid = [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ];

    expect(navigateVerticalVertices(grid)).toEqual(8);
  });

  it('should handle grid with occupied edges on the left column', () => {
    const grid = [
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ];

    expect(navigateVerticalVertices(grid)).toEqual(8);
  });

  it('should handle grid with occupied edges on the right row', () => {
    const grid = [
      [0, 0, 0, 1],
      [0, 0, 0, 1],
      [0, 0, 0, 1],
      [0, 0, 0, 1],
    ];

    expect(navigateVerticalVertices(grid)).toEqual(8);
  });
});

describe('alternativeSolution', () => {
  it('should handle grid', () => {
    const grid = [
      [0,1,0,0],
      [1,1,1,0],
      [0,1,0,0],
      [1,1,0,0],
    ];

    expect(alternativeSolution(grid)).toEqual(16);
  });
});
