function orangesRotting(grid: number[][]): number {
  let freshOranges = 0;
  let rottenOrangeCoords: number[][] = [];
  let minutes = 0;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ] as const;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 2) rottenOrangeCoords.push([r, c]);
      else if (grid[r][c] === 1) freshOranges++;
    }
  }

  while (rottenOrangeCoords.length && freshOranges > 0) {
    const currentLevelSize = rottenOrangeCoords.length;
    for (let i = 0; i < currentLevelSize; i++) {
      const [row, col] = rottenOrangeCoords.shift()!;

      for (const [rowDirection, colDirection] of directions) {
        const newRow = row + rowDirection;
        const newCol = col + colDirection;
        if (
          newRow < 0 ||
          newCol < 0 ||
          newRow >= grid.length ||
          newCol >= grid[0].length ||
          grid[newRow][newCol] !== 1 // Is not a fresh orange
        )
          continue;

        grid[newRow][newCol] = 2; // Make rotten
        freshOranges--; // Decrement fresh orange count
        rottenOrangeCoords.push([newRow, newCol]); // Add to rotten oranges queue
      }
    }

    minutes++;
  }

  return !freshOranges ? minutes : -1;
}
