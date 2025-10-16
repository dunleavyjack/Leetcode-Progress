function orangesRotting(grid: number[][]): number {
  let rows = grid.length;
  let cols = grid[0].length;

  let freshOrangesCount = 0;
  let queue: [number, number][] = [];

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ] as const;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c]);
      } else if (grid[r][c] === 1) {
        freshOrangesCount++;
      }
    }
  }

  let time = 0;
  while (queue.length && freshOrangesCount > 0) {
    const currentLength = queue.length;
    for (let i = 0; i < currentLength; i++) {
      const [originalRow, originalCol] = queue.shift()!;

      for (const [dr, dc] of directions) {
        const newRow = originalRow + dr;
        const newCol = originalCol + dc;

        if (
          newRow < 0 ||
          newCol < 0 ||
          newRow >= rows ||
          newCol >= cols ||
          grid[newRow][newCol] !== 1
        )
          continue;

        grid[newRow][newCol] = 2;
        freshOrangesCount--;
        queue.push([newRow, newCol]);
      }
    }
    time++;
  }

  return freshOrangesCount ? -1 : time;
}
