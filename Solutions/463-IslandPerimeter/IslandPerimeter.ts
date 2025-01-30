function islandPerimeter(grid: number[][]): number {
  let directions = [
    [-1, 0], // UP
    [1, 0], // DOWN
    [0, -1], // LEFT
    [0, 1], // RIGHT
  ] as const;

  let perimeter = 0;

  // Iterate through all cells until island reached
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      // If island, call dfs to calculate the permeter
      if (grid[r][c] === 1) {
        perimeter = dfs(r, c);
        break;
      }
    }
  }

  return perimeter;

  function dfs(row: number, col: number) {
    // If out of bounds or water reached, increase perimeter
    if (
      row < 0 ||
      col < 0 ||
      row >= grid.length ||
      col >= grid[0].length ||
      grid[row][col] === 0
    )
      return 1;
    // If space already visited, return nothing
    else if (grid[row][col] === -1) return 0;

    let perimeter = 0;
    grid[row][col] = -1; // Set current space as visited

    for (const [dr, dc] of directions) {
      perimeter += dfs(row + dr, col + dc);
    }

    return perimeter;
  }
}
