function twoSum(numbers: number[], target: number): number[] {
  // Create two pointers, one at each end
  let left = 0;
  let right = numbers.length - 1;

  // While left is not equal to right, sum the values that both pointers point to.
  // If that number is less than the target, increment left. Otherwise, decrement right.
  while (left < right) {
    const sum = numbers[left] + numbers[right];

    // Check if target is reached. If so return,
    // adding 1 because for some reason the result should be 1 indexed
    if (sum === target) return [left + 1, right + 1];

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  // Return [-1, -1] if no pair is found
  return [-1, -1];
}
