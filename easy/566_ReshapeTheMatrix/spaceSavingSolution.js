function spaceSavingSolution(array, rows, columns) {
  // check for length
  const currentRows = array.length;
  const currentColumns = array[0].length;
  if ((rows * columns) !== (currentRows * currentColumns)) {
    return array;
  }

  let result = [];
  for (let i = 0; i < rows * columns; i++) {
    const newRow = Math.floor(i / columns);
    const newColumn = i % columns;
    const currentRow = Math.floor(i / currentColumns);
    const currentColumn = i % currentColumns;

    if (!result[newRow]) result[newRow] = [];

    result[newRow][newColumn] = array[currentRow][currentColumn];
  }
  return result;
}

module.exports = {
  spaceSavingSolution,
};
