function isValidSudoku(board: string[][]): boolean {
  const seen = new Set<string>();
  const numRows = board.length;
  const numCols = board[0].length;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const num = board[row][col];
      if (num === ".") continue;

      const grid = Math.floor(row / 3) * 3 + Math.floor(col / 3);
      const rowKey = `row-${row}-${num}`;
      const colKey = `col-${col}-${num}`;
      const gridKey = `grid-${grid}-${num}`;

      if (seen.has(rowKey) || seen.has(colKey) || seen.has(gridKey))
        return false;

      seen.add(rowKey);
      seen.add(colKey);
      seen.add(gridKey);
    }
  }

  return true;
}
