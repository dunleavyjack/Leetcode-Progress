function lengthOfLongestSubstring(s: string): number {
  const uniqueChars = new Set<string>();
  let left = 0;
  let max = 0;

  for (let right = 0; right < s.length; right++) {
    // If a duplicate exists in the set, keep removing the lefternmost values until the new right value can be added
    while (uniqueChars.has(s[right])) {
      uniqueChars.delete(s[left]);
      left++;
    }

    // Always add the right value
    uniqueChars.add(s[right]);
    max = Math.max(max, uniqueChars.size);
  }

  return max;
}
