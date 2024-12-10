function productExceptSelf(nums: number[]): number[] {
  // Create result array to store eventual result
  const result: number[] = Array(nums.length);

  // Use the prefix/postfix array approach:
  // Calcuate, for each element in the array, the total product of all elements behind the current one,
  // using 1 as the default value.
  let prefixProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefixProduct; // <- Set the the index in result to be to the product of all nums to the left
    prefixProduct *= nums[i]; // <- Update the prefix product for the next iteration
  }

  // Then, do the same going backwards
  let postfixProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfixProduct;
    postfixProduct *= nums[i];
  }

  // Return the result
  return result;
}
