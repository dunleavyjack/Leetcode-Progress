function validPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (s[left] !== s[right]) {
      return (
        isValidPalindrome(s, left + 1, right) ||
        isValidPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }

  return true;
}

function isValidPalindrome(s: string, left: number, right: number) {
  console.log(s);
  while (left <= right) {
    if (s[left] !== s[right]) return false;
    else {
      left++;
      right--;
    }
  }
  return true;
}
