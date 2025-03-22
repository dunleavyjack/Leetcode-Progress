function triangularSum(nums: number[]): number {
  // Base case: when only one num in nums return that number;
  if (nums.length === 1) return nums[0];

  // New array to store the sums
  let sums: number[] = [];

  // Iterate through the input and push the result to the sums array
  for (let i = 1; i < nums.length; i++) {
    sums.push((nums[i - 1] + nums[i]) % 10);
  }

  // Recursively call itself to find sums of next "row"
  return triangularSum(sums);
}
