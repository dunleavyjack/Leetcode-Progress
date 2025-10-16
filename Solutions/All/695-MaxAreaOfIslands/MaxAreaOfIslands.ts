function maxAreaOfIsland(grid: number[][]): number {
  let maxArea = 0;

  // Grid problem setup (number of rows, cols, and the directions)
  let numOfRows = grid.length;
  let numOfCols = grid[0].length;
  const directions = [
    [-1, 0], // Up
    [1, 0], // Down
    [0, -1], // Left
    [0, 1], // Right
  ] as const;

  // DFS function for calculating the area inside each island
  function dfs(row: number, col: number): number {
    // When the boundary of an island is reached, return `0`.
    if (
      row < 0 ||
      col < 0 ||
      row >= numOfRows ||
      col >= numOfCols ||
      grid[row][col] !== 1
    )
      return 0;

    // Set to `0` so it will be ignored by next dfs check
    grid[row][col] = 0;

    // Call dfs on each side of the current cell, adding all areas to the total
    let area = 0;
    for (let [dr, dc] of directions) {
      area += dfs(row + dr, col + dc);
    }

    // When this is reached, increment the area by one
    return area + 1;
  }

  // Iterate through each cell in the input and perform the dfs call on any island cell that is reached
  for (let r = 0; r < numOfRows; r++) {
    for (let c = 0; c < numOfCols; c++) {
      if (grid[r][c] === 1) {
        const area = dfs(r, c);
        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
}
