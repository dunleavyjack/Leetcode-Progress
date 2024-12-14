function lengthOfLongestSubstring(s: string): number {
  // Create a set to keep track of unique chars, and a max value to store the result.
  const uniqueChars = new Set<string>();
  let max = 0;

  // Two pointers, left and right.
  let left = 0;
  let right = 0;

  // Iterate until right is out of bounds.
  while (right < s.length) {
    // First, check to see if this char is already in the set.
    // If it does, keep deleting and incrementing the left value.
    while (uniqueChars.has(s[right])) {
      uniqueChars.delete(s[left]);
      left++;
    }

    // "Happy path". Add the right value to the set and compare the total length with the max.
    uniqueChars.add(s[right]);
    max = Math.max(right - left + 1, max);

    right++;
  }

  // Return the result.
  return max;
}
