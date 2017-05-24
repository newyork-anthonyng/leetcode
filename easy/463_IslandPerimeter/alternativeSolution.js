/*
 * This alternative solution will iterate through each vertical and horizontal vertice in the grid
 * If a vertice is surrounded by 2 occupied cells, then it adds 0 to the perimeter.
 * If a vertice is surrounded by 1 occupied cell, then it adds 1 to the perimter.
 * If a vertice is surrounded by 0 occupied cells, then it adds 0 to the perimeter.
 */
function alternativeSolution(grid) {
  return navigateHorizontalVertices(grid) + navigateVerticalVertices(grid);
}

function navigateHorizontalVertices(grid) {
  const width = grid[0].length;

  let result = 0;
  for (let i = 0; i <= grid.length; i++) {
    for (let j = 0; j < width; j++) {
      const topSquare = grid[i - 1] === undefined ? 0 : grid[i - 1][j];
      const bottomSquare = grid[i] === undefined ? 0 : grid[i][j];

      if ((topSquare + bottomSquare) === 1) result++;
    }
  }

  return result;
}

function navigateVerticalVertices(grid) {
  const width = grid[0].length;

  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j <= width; j++) {
      const leftSquare = grid[i][j- 1] || 0;
      const rightSquare = grid[i][j] || 0;

      if ((leftSquare + rightSquare) === 1) result++;
    }
  }

  return result;
}

module.exports = {
  alternativeSolution,
  navigateHorizontalVertices,
  navigateVerticalVertices,
};
