/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  // Lengths of rows and cols
  let rows = board.length;
  let cols = board[0].length;

  // 4-directional directions to apply to each cell
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ] as const;

  // Iterate through all cells in the grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // When a boarder cell is found that is equal to "O",
      // call DFS to convert all boarder adjacent "O" cells, and those connected,
      // to -1 temporarily.
      if (isBoarderCell(r, c) && board[r][c] === "O") {
        dfs(r, c);
      }
    }
  }

  // Iterate through all cells again,
  // setting all "O" cells to "X" and all temp -1 cells back to "O".
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === "O") {
        board[r][c] = "X";
      } else if (board[r][c] === "T") {
        board[r][c] = "O";
      }
    }
  }

  // DFS function to set all boarder adjacent cells,
  // and any four-directionally connected "O" cell to "-1" temporarily.
  function dfs(row: number, col: number) {
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      board[row][col] !== "O"
    )
      return;
    // Mark cell with temp value to express touching boarder,
    // or a cell touching a cell that touches the boarder.
    board[row][col] = "T";

    for (const [rowDirection, colDirection] of directions) {
      const newRow = row + rowDirection;
      const newCol = col + colDirection;

      dfs(newRow, newCol);
    }
  }

  // Determine if a cell is on the boarder of the grid.
  function isBoarderCell(row: number, col: number) {
    return row === 0 || row === rows - 1 || col === 0 || col === cols - 1;
  }
}
