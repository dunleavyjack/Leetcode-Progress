function isValidSudoku(board: string[][]): boolean {
  let visitedCells = new Set<string>(); // { row-num } | {col-num} | {box-num}
  let numRows = board.length - 1;
  let numCols = board[0].length - 1;

  for (let row = 0; row <= numRows; row++) {
    for (let col = 0; col <= numCols; col++) {
      const num = board[row][col];
      if (num === ".") continue;

      const rowSignature = `row-${row}-${num}`;
      const colSignature = `col-${col}-${num}`;

      const box = Math.floor(row / 3) * 3 + Math.floor(col / 3);
      const boxSignature = `box-${box}-${num}`;
      console.log(rowSignature, colSignature, boxSignature);

      if (
        visitedCells.has(rowSignature) ||
        visitedCells.has(colSignature) ||
        visitedCells.has(boxSignature)
      )
        return false;

      visitedCells.add(rowSignature);
      visitedCells.add(colSignature);
      visitedCells.add(boxSignature);
    }
  }

  return true;
}
