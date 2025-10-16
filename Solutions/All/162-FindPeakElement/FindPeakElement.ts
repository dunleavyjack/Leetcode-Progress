function findPeakElement(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const leftNum = nums[mid - 1] || -Infinity;
    const num = nums[mid];
    const rightNum = nums[mid + 1] || -Infinity;

    if (leftNum < num && num > rightNum) return mid;

    if (leftNum > rightNum) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
