function isValidSudoku(board: string[][]): boolean {
  // Contains all visited nums from the board.
  // They are stored using this pattern: "position-positionNum-positionValue"
  const seen = new Set<string>();

  // Iterate through each cell in the grid
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      const cell = board[row][col];

      // If the cell is "empty", skip
      if (cell == ".") continue;

      // This formula finds the "subgrid index"
      const grid = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      // Check if the current num is appears horizontal, verically, or in the same grid
      if (
        seen.has(`row-${row}-${cell}`) ||
        seen.has(`col-${col}-${cell}`) ||
        seen.has(`grid-${grid}-${cell}`)
      )
        return false;

      // If not, add it to the row, column, and grid
      seen.add(`row-${row}-${cell}`);
      seen.add(`col-${col}-${cell}`);
      seen.add(`grid-${grid}-${cell}`);
    }
  }

  // If this is reached, the sudoku is valid
  return true;
}
