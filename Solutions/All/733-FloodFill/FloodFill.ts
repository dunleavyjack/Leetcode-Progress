function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  const rowLength = image.length;
  const colLength = image[0].length;
  const directions = [
    [-1, 0], // Up
    [1, 0], // Down
    [0, -1], // Left
    [0, 1], // Right
  ] as const;

  dfs(sr, sc, image[sr][sc]);

  function dfs(row: number, col: number, originalColor: number) {
    // Base case: Row or col pointers are out of bounds.
    // Or not original color or (important!) the color we are "filling"
    if (
      row < 0 ||
      col < 0 ||
      row >= rowLength ||
      col >= colLength ||
      image[row][col] !== originalColor ||
      image[row][col] === color
    )
      return;

    image[row][col] = color;

    for (const [rowDirection, colDirection] of directions) {
      dfs(row + rowDirection, col + colDirection, originalColor);
    }
  }

  return image;
}
