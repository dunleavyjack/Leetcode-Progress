function lengthOfLongestSubstring(s: string): number {
  let uniqueCharacters = new Set<string>();

  let left = 0;
  let right = 0;
  let longestSubstring = 0;

  while (right < s.length) {
    if (uniqueCharacters.has(s[right])) {
      while (s[left] !== s[right]) {
        uniqueCharacters.delete(s[left]);
        left++;
      }

      left++;
    } else {
      uniqueCharacters.add(s[right]);
    }

    longestSubstring = Math.max(uniqueCharacters.size, longestSubstring);
    right++;
  }

  return longestSubstring;
}
