function searchMatrix(matrix: number[][], target: number): boolean {
  for (const row of matrix) {
    const lastValueOfRow = row[row.length - 1];
    if (lastValueOfRow >= target) {
      return binarySearch(row, target);
    }
  }

  return false;
}

function binarySearch(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return true;

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}
