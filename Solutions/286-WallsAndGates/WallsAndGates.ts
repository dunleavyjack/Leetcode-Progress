/**
 Do not return anything, modify rooms in-place instead.
 */
function wallsAndGates(rooms: number[][]): void {
  let rows = rooms.length;
  let cols = rooms[0].length;

  let queue: [number, number][] = [];

  const directions = [
    [-1, 0], // Up
    [1, 0], // Down
    [0, 1], // Left
    [0, -1], // Right
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (rooms[r][c] === 0) {
        queue.push([r, c]);
      }
    }
  }

  while (queue.length) {
    const [startingRow, startingCol] = queue.shift()!;

    for (const [dr, dc] of directions) {
      const newRow = startingRow + dr;
      const newCol = startingCol + dc;

      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow >= rows ||
        newCol >= cols ||
        rooms[newRow][newCol] !== 2147483647 // Current cell is not an open cell
      )
        continue;

      // Set new cell to 1 + the original cell value
      rooms[newRow][newCol] = rooms[startingRow][startingCol] + 1;
      queue.push([newRow, newCol]);
    }
  }
}
