function highestPeak(isWater: number[][]): number[][] {
  const rows = isWater.length;
  const cols = isWater[0].length;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ] as const;

  const queue: [number, number][] = [];
  let queueStart = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (isWater[r][c] === 1) {
        isWater[r][c] = 0;
        queue.push([r, c]);
      } else {
        isWater[r][c] = -1;
      }
    }
  }

  while (queueStart < queue.length) {
    const [currRow, currCol] = queue[queueStart++];
    for (const [dr, dc] of directions) {
      const newRow = currRow + dr;
      const newCol = currCol + dc;

      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow >= rows ||
        newCol >= cols ||
        isWater[newRow][newCol] !== -1
      )
        continue;

      isWater[newRow][newCol] = isWater[currRow][currCol] + 1;
      queue.push([newRow, newCol]);
    }
  }

  return isWater;
}
