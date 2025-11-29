function searchMatrix(matrix: number[][], target: number): boolean {
  for (let row of matrix) {
    const lastNumInRow = row[row.length - 1];
    if (lastNumInRow === target) return true;

    if (target < lastNumInRow) {
      let left = 0;
      let right = row.length - 1;

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (row[mid] === target) return true;

        if (row[mid] > target) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
  }

  return false;
}
