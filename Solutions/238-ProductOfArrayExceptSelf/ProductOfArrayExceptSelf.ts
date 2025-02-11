function productExceptSelf(nums: number[]): number[] {
  let prefix = 1;
  let postfix = 1;

  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
}
