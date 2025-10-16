function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    // Left side is sorted
    if (nums[left] <= nums[mid]) {
      // Target is in sorted left side
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
        // Target is outside left side
      } else {
        left = mid + 1;
      }

      // Right is sorted
    } else {
      // Target is in sorted right side
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
        // Target is outside right side
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}
