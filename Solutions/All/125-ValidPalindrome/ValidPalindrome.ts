function isPalindrome(s: string): boolean {
  // Sanitize string to remove all non-alphanumberic characters and apply lowercase
  s = s.replace(/\W|_/g, "").toLowerCase();

  // Initialize two pointers, one at 0 and one at the last index in the array
  let left = 0;
  let right = s.length - 1;

  // Make sure the values at both pointers is the same, then bring them closer together.
  // Using `<=` instead of `<` here to account for palindromes with an odd numbered length
  while (left <= right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  // If this line is reached, then the input was a palindrome
  return true;
}
