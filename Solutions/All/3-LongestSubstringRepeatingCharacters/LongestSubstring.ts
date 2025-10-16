function lengthOfLongestSubstring(s: string): number {
  // Set to keep track of uniqueChars in each substring
  const uniqueSubstring = new Set<string>();

  let maxLength = 0;
  let left = 0;
  let right = 0;

  // Iterate through all right elements
  while (right < s.length) {
    // (Non-intuitive) Check to see if the set contains the current right value.
    // If so, keep removing elements from set until this is not the case.
    while (uniqueSubstring.has(s[right])) {
      uniqueSubstring.delete(s[left]);
      left++;
    }

    // Always add the right element,
    // compare if the current substring is greater than the current,
    // and increment the right pointer.
    uniqueSubstring.add(s[right]);
    maxLength = Math.max(maxLength, uniqueSubstring.size);
    right++;
  }

  return maxLength;
}
