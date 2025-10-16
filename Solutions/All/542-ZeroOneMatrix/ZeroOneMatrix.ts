function updateMatrix(mat: number[][]): number[][] {
  let rows = mat.length;
  let cols = mat[0].length;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ] as const;

  let queue: [number, number][] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (mat[r][c] === 0) {
        queue.push([r, c]);
      } else {
        mat[r][c] = -1;
      }
    }
  }

  while (queue.length) {
    const [currRow, currCol] = queue.shift() as [number, number];
    for (let [dr, dc] of directions) {
      const newRow = currRow + dr;
      const newCol = currCol + dc;

      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow >= rows ||
        newCol >= cols ||
        mat[newRow][newCol] !== -1
      )
        continue;

      mat[newRow][newCol] = mat[currRow][currCol] + 1;
      queue.push([newRow, newCol]);
    }
  }

  return mat;
}
