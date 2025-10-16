function productExceptSelf(nums: number[]): number[] {
  let result: number[] = [];

  let prefixProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefixProduct;
    prefixProduct *= nums[i];
  }

  let postfixProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfixProduct;
    postfixProduct *= nums[i];
  }

  return result;
}
