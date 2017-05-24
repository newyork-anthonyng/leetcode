/*
 * https://leetcode.com/problems/island-perimeter/#/description
 * You are given a map in form of a two-dimensional integer grid where 1
 * represents land and 0 represents water. Grid cells are connected
 * horizontally/vertically (not diagonally). The grid is completely surrounded
 * by water, and there is exactly one island (i.e., one or more connected land
 * cells). The island doesn't have "lakes" (water inside that isn't connected to
 * the water around the island). One cell is a square with side length 1. The
 * grid is rectangular, width and height don't exceed 100. Determine the
 * perimeter of the island.
 */

function islandPerimeter(grid) {
  let result = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const square = { row, col };
      result += checkSurroundingSquares(square, grid);
    }
  }
  return result;
}

function checkSurroundingSquares(square, grid) {
  if (grid[square.row][square.col] === 0) {
    return 0;
  }

  let result = 0;
  const topRow = square.row - 1;
  const bottomRow = square.row + 1;
  const leftCol = square.col - 1;
  const rightCol = square.col + 1;

  // handle edges
  if (grid[topRow] === undefined) result++;
  if (grid[bottomRow] === undefined) result++;
  if (grid[square.row][leftCol] === undefined) result++;
  if (grid[square.row][rightCol] === undefined) result++;

  // handle top
  if (grid[topRow] && grid[topRow][square.col] === 0) {
    result++;
  }
  // handle bottom
  if (grid[bottomRow] && grid[bottomRow][square.col] === 0) {
    result++;
  }
  // handle left
  if (grid[square.row][leftCol] === 0) {
    result++;
  }
  // handle right
  if (grid[square.row][rightCol] === 0) {
    result++;
  }

  return result;
}

module.exports = {
  islandPerimeter,
  checkSurroundingSquares,
};
