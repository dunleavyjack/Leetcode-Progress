function maximumUniqueSubarray(nums: number[]): number {
  let uniqueNums = new Set<number>();
  let sum = 0;
  let maxSum = 0;

  let left = 0;
  let right = 0;

  while (right < nums.length) {
    sum += nums[right];

    if (uniqueNums.has(nums[right])) {
      while (nums[left] !== nums[right]) {
        uniqueNums.delete(nums[left]);
        sum -= nums[left];
        left++;
      }

      sum -= nums[left];
      left++;
    } else {
      uniqueNums.add(nums[right]);
    }

    maxSum = Math.max(sum, maxSum);
    right++;
  }

  return maxSum;
}
