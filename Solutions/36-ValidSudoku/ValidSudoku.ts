function isValidSudoku(board: string[][]): boolean {
  let visitedCells = new Set<string>(); // row-${rowNum}-${num} || col-${colNum}-${num} || box-${boxNum}-${num}

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      const cellVal = board[row][col];
      if (cellVal === ".") continue;

      const rowKey = `row-${row}-${cellVal}`;
      const colKey = `col-${col}-${cellVal}`;

      const box = ~~(row / 3) * 3 + ~~(col / 3);
      const boxKey = `box-${box}-${cellVal}`;

      if (
        visitedCells.has(rowKey) ||
        visitedCells.has(colKey) ||
        visitedCells.has(boxKey)
      )
        return false;

      visitedCells.add(rowKey);
      visitedCells.add(colKey);
      visitedCells.add(boxKey);
    }
  }

  return true;
}
