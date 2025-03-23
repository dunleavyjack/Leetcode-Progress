function exist(board: string[][], word: string): boolean {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ] as const;

  const visiting = new Set<string>(); // Set to prevent calls from repeatedly checking the same neighbors

  function dfs(row: number, col: number, index: number): boolean {
    // Base case: Out of bounds or not the right word
    if (
      row < 0 ||
      col < 0 ||
      row >= board.length ||
      col >= board[0].length ||
      board[row][col] !== word[index] ||
      visiting.has(`${row},${col}`)
    ) {
      return false;
      // Base case: End of word reached (Happy Path)
    } else if (index === word.length - 1) {
      return true;
    }

    visiting.add(`${row},${col}`);
    for (let [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      const newIndex = index + 1;

      const isWordExist = dfs(newRow, newCol, newIndex);
      if (isWordExist) return true;
    }

    visiting.delete(`${row},${col}`);
    return false;
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] === word[0]) {
        const isWordExist = dfs(r, c, 0);
        if (isWordExist) return true;
      }
    }
  }

  return false;
}
