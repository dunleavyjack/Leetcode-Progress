function removeElement(nums: number[], val: number): number {
  // Create a pointer at the end of input.
  // This will point to a non-target element,
  // and can be used to swap this element into an earlier
  // position if a target element is reached.
  let end = nums.length - 1;

  // Iterate through the input until the end pointer is reached
  for (let i = 0; i <= end; i++) {
    // The end pointer might be pointing to an element to remove,
    // so keep decrementing until it reaches a "good" element
    while (nums[end] === val && end > i) {
      end--;
    }

    // If the current num is an element to remove, swap it with the "good" element
    // that `end` is pointing too, and decrement `end`.
    if (nums[i] === val) {
      [nums[i], nums[end]] = [nums[end], nums[i]];
      end--;
    }
  }

  // Return `end` plus 1 to account for the 0th index.
  return end + 1;
}
