function numIslands(grid: string[][]): number {
  let islands = 0;

  const rowLength = grid.length;
  const colLength = grid[0].length;
  const directions = [
    [-1, 0], // Up
    [1, 0], // Down
    [0, -1], // Left
    [0, 1], // Right
  ] as const;

  // Iterate through all cells in the grid
  for (let r = 0; r < rowLength; r++) {
    for (let c = 0; c < colLength; c++) {
      // When an island is reached, increment the number of islands
      // Also, perform DFS to mark all parts of that island as a non-island,
      // so future iterations do not count other parts of this island as a new island.
      if (grid[r][c] === "1") {
        islands++;
        dfs(r, c);
      }
    }
  }

  function dfs(row: number, col: number) {
    // Base case: the row or col pointer is out of bounds
    // Or, the cell value is a non-island
    if (
      row < 0 ||
      col < 0 ||
      row >= rowLength ||
      col >= colLength ||
      grid[row][col] === "0"
    )
      return;

    // We are on an island cell. Mark is as a non-island
    grid[row][col] = "0";

    // Recursively check up, down, to the left, and right.
    for (const [rowDirection, colDirection] of directions) {
      dfs(row + rowDirection, col + colDirection);
    }
  }

  return islands;
}
