function majorityElement(nums: number[]): number {
  let candidate = nums[0];
  let count = 0;

  for (let num of nums) {
    if (num === candidate) count++;
    else {
      count--;
      if (count === 0) {
        candidate = num;
        count = 1;
      }
    }
  }

  return candidate;
}
