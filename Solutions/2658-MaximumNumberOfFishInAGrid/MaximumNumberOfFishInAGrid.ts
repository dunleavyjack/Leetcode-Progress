function findMaxFish(grid: number[][]): number {
  // Graph problem setup (len of rows and cols and 4 directions )
  let rows = grid.length;
  let cols = grid[0].length;
  const directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
  ] as const;

  let maxFish = 0;

  // Iterate through every cell looking for water spaces (any non-zero space)
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // When water is reached, perform dfs to count potential fish
      if (grid[r][c] > 0) {
        const potentialFish = dfs(r, c);
        maxFish = Math.max(maxFish, potentialFish);
      }
    }
  }

  // Return the result
  return maxFish;

  // DFS function for recursively calculating all connected fish
  function dfs(row: number, col: number) {
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      // Ignore water spaces. Important! Because visited spaces will be reset.
      grid[row][col] === 0
    )
      return 0;

    // Create a counter to track connected fish
    let potentialFish = grid[row][col];

    // Set visited space to 0. Important! (I forgot this on first try)!
    grid[row][col] = 0;

    // Recrusively call self four-directionally
    for (const [dr, dc] of directions) {
      potentialFish += dfs(row + dr, col + dc);
    }

    // Return the total
    return potentialFish;
  }
}
