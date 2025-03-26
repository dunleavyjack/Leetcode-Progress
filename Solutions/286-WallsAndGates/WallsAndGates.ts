/**
 Do not return anything, modify rooms in-place instead.
 */
function wallsAndGates(rooms: number[][]): void {
  let gates: [number, number][] = [];

  for (let r = 0; r < rooms.length; r++) {
    for (let c = 0; c < rooms[0].length; c++) {
      // Push gates to the queue
      if (rooms[r][c] === 0) {
        gates.push([r, c]);
      }
    }
  }

  const directions = [
    [-1, 0], // Up
    [1, 0], // Down
    [0, -1], // Left
    [0, 1], // Right
  ] as const;

  while (gates.length) {
    const [startingRow, startingCol] = gates.shift()!;

    for (const [dr, dc] of directions) {
      const newRow = startingRow + dr;
      const newCol = startingCol + dc;
      // Base case: Out of bounds or an obstacle
      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow >= rooms.length ||
        newCol >= rooms[0].length ||
        rooms[newRow][newCol] !== 2147483647 // Obstacle
      )
        continue;

      rooms[newRow][newCol] = rooms[startingRow][startingCol] + 1;
      gates.push([newRow, newCol]);
    }
  }
}
