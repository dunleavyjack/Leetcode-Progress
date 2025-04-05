function rob(nums: number[]): number {
  // Safety case: if the array is empty return 0, otherwise return the only element in the array
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  // Create a "dp" array to store the max at step along the way
  // The goal is to simplify the input, so there are always only two choices. This way,
  // so the last value in the "dp" array will represent the max for the whole problem.
  const dp = Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }

  return dp[dp.length - 1];
}
