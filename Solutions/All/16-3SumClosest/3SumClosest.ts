function threeSumClosest(nums: number[], target: number): number {
  nums = nums.sort((a, b) => a - b);

  let closestSum = 0;
  let minDiff = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      const diff = Math.abs(sum - target);

      if (diff < minDiff) {
        minDiff = diff;
        closestSum = sum;
      }

      if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return closestSum;
}
