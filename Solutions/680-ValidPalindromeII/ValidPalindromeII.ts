function validPalindrome(s: string): boolean {
  return isValid(s, 0, s.length - 1, true);
}

function isValid(
  s: string,
  left: number,
  right: number,
  removalRemaining: boolean,
) {
  // Base case: if left exceeds right, or they are equal then input is a palindrome
  if (left >= right) return true;

  // Both
  if (s[left] === s[right]) {
    return isValid(s, left + 1, right - 1, removalRemaining);
  } else {
    // Check if a removal already happened. If so, return false.
    if (!removalRemaining) return false;

    // Check if a palidrome exists after removing from the left and the right, and update removal remaining to false.
    removalRemaining = false;
    return (
      isValid(s, left + 1, right, removalRemaining) ||
      isValid(s, left, right - 1, removalRemaining)
    );
  }
}
