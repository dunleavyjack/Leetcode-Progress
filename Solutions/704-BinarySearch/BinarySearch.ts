function search(nums: number[], target: number): number {
  // Create two points, one at the start of the array and one at the end.
  let left = 0;
  let right = nums.length - 1;

  // Continue to iterate until the left is <= right. The reason for <= is to cover odd numbered inputs.
  while (left <= right) {
    // Calculate the middle index in the array. Keep in mind left and right will change later on.
    const mid = Math.floor((left + right) / 2);
    // Check to see if you found the value
    if (nums[mid] === target) return mid;

    // If the target is larger than the number at the "middle" index, it means the
    // result is in the right side of the mid. Move the left to mid.
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      // Otherwise, do the opposite with the right pointer.
      right = mid - 1;
    }
  }

  // Return -1 if not found.
  return -1;
}
