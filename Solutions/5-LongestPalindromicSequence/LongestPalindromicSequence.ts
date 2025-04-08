function longestPalindrome(s: string): string {
  let result = "";

  function checkValid(s: string, left: number, right: number) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > result.length) {
        result = s.substring(left, right + 1);
      }

      right++;
      left--;
    }
  }

  for (let i = 0; i < s.length; i++) {
    checkValid(s, i, i); // Odd numbered palindrome
    checkValid(s, i, i + 1); // Even numbered palindrome
  }

  return result;
}
