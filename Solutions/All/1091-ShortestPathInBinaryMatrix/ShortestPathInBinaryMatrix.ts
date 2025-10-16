function shortestPathBinaryMatrix(grid: number[][]): number {
  let queue: [number, number, number][] = [[0, 0, 1]]; // row, col, length
  const visited = new Set<string>();

  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
  ] as const;

  while (queue.length) {
    const [row, col, length] = queue.shift() as [number, number, number];

    if (
      // Outside bounds
      row < 0 ||
      col < 0 ||
      row >= grid.length ||
      col >= grid[0].length ||
      // Already visited
      visited.has(`${row}-${col}`) ||
      // Cell is not a clear path
      grid[row][col] === 1
    )
      continue;

    visited.add(`${row}-${col}`);

    if (row === grid.length - 1 && col === grid[0].length - 1) {
      return length;
    }

    for (const [rowDirection, colDirection] of directions) {
      const newRow = row + rowDirection;
      const newCol = col + colDirection;

      queue.push([newRow, newCol, length + 1]);
    }
  }

  return -1;
}
