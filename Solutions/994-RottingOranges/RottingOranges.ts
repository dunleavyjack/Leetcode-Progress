function orangesRotting(grid: number[][]): number {
  let rottenOranges: [number, number][] = []; // [row, col] of rotten orange

  let minutes = 0;
  let freshOranges = 0;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ] as const;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 2) rottenOranges.push([r, c]);
      else if (grid[r][c] === 1) freshOranges++;
    }
  }

  while (rottenOranges.length && freshOranges) {
    const currentLevelSize = rottenOranges.length;
    for (let i = 0; i < currentLevelSize; i++) {
      const [row, col] = rottenOranges.shift()!;

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
        freshOranges--;

        rottenOranges.push([newRow, newCol]);
      }
    }

    minutes++;
  }

  return !freshOranges ? minutes : -1;
}
