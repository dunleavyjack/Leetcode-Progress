function isValidPalindrome(s: string, k: number): boolean {
  const memo = new Map<string, boolean>();

  function isValid(
    s: string,
    left: number,
    right: number,
    removalsRemaining: number,
  ) {
    // Base case 1:
    // Amount of removals exceeds limit
    if (removalsRemaining < 0) return false;

    // Base case 2:
    // If left and right meet (odd lengthed palindrom), or left exceeds right (even numbered palindrome)
    if (left >= right) return true;

    // Create a key for memoization
    const memoKey = `${left}-${right}-${removalsRemaining}`;
    if (memo.has(memoKey)) return memo.get(memoKey);

    // Happy path: both letters match.
    // Increment left and decrement right
    if (s[left] === s[right]) {
      const result = isValid(s, left + 1, right - 1, removalsRemaining);
      memo.set(memoKey, result);
      return result;
      // Letters don't match and removal needed.
    } else {
      const result =
        isValid(s, left + 1, right, removalsRemaining - 1) ||
        isValid(s, left, right - 1, removalsRemaining - 1);
      memo.set(memoKey, result);
      return result;
    }
  }

  const l = 0;
  const r = s.length - 1;
  return isValid(s, l, r, k);
}
