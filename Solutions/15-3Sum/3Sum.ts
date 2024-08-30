function threeSum(nums: number[]): number[][] {
  // Sort into non-decreasing order
  nums = nums.sort((a, b) => a - b);
  let result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    // Skip duplicate numbers``
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Move both pointers inward, skipping any duplicate numbers
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (right > left && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}
