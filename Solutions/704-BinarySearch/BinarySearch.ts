function search(nums: number[], target: number): number {
  // Create two pointers, one at the start and one at the end
  let left = 0;
  let right = nums.length - 1;

  // Interate until left is greate than right, or vice verse.
  // This handles odd numbered input cases
  while (left <= right) {
    // The middle index should be half of the right and the left, considering their current positions
    const midIndex = Math.floor((left + right) / 2);
    // You don't need this, but I like adding the specific number as a variable.
    const numAtMidIndex = nums[midIndex];

    // Check if it is the target. Happy Path!
    if (numAtMidIndex === target) return midIndex;

    // Likely, it's not. So, check if the middle number is less/greater than the target.
    if (numAtMidIndex < target) {
      left = midIndex + 1;
    } else {
      right = midIndex - 1;
    }
  }

  // Default return
  return -1;
}
