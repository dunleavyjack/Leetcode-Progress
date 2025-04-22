function spiralOrder(matrix: number[][]): number[] {
  let result: number[] = [];
  let visited = new Set<string>(); // [ "row,col" ]
  const directions = [
    [0, 1], // RIGHT
    [1, 0], // DOWN
    [0, -1], // LEFT
    [-1, 0], // UP
  ] as const;

  let row = 0;
  let col = 0;
  let directionIndex = 0;

  for (let i = 0; i < matrix.length * matrix[0].length; i++) {
    result.push(matrix[row][col]);
    visited.add(row + "," + col);

    const [dr, dc] = directions[directionIndex];
    let newRow = row + dr;
    let newCol = col + dc;

    if (
      newRow < 0 ||
      newCol < 0 ||
      newRow >= matrix.length ||
      newCol >= matrix[0].length ||
      visited.has(newRow + "," + newCol)
    ) {
      // Change direction
      directionIndex = (directionIndex + 1) % 4;
      const [newDr, newDc] = directions[directionIndex];
      row += newDr;
      col += newDc;
    } else {
      row = newRow;
      col = newCol;
    }
  }

  return result;
}
