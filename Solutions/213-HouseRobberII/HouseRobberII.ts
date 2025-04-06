function rob(nums: number[]): number {
  // Safety case: input is empty or only has one value.
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  // Since the houses are in a circle, you can't rob both the first and last houses.
  // This means that instead, you can rob starting from position 1 or ending at position -1.
  const skippingFirst = helper(nums.slice(1));
  const skippingLast = helper(nums.slice(0, -1));
  return Math.max(skippingFirst, skippingLast);
}

// Determines the max that can be robbed
function helper(nums: number[]) {
  let rob1 = 0;
  let rob2 = 0;

  for (let num of nums) {
    [rob1, rob2] = [rob2, Math.max(rob2, num + rob1)];
  }

  return rob2;
}
