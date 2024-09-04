function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] < nums[right]) return nums[left];
    else {
      const mid = Math.floor((left + right) / 2);
      if (nums[left] <= nums[mid]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  }

  return nums[left];
}
