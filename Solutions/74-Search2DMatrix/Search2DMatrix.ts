function searchMatrix(matrix: number[][], target: number): boolean {
  // Iterate through the rows of the matrix
  for (let row of matrix) {
    // Check if the target is in the row
    const lastValInRow = row[row.length - 1];
    if (lastValInRow >= target) {
      return binarySearch(row, target);
    }
  }

  // Return false by default
  return false;
}

// Modified binary search to return true/false
function binarySearch(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return true;

    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}
