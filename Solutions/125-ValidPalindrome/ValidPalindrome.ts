function isPalindrome(s: string): boolean {
	s = s.replace(/\W|_/g, "").toLowerCase(); // Remove spaces, special characters (commas), and make lowercase
	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		if (s[left] !== s[right]) return false;
		left++;
		right--;
	}

	return true;
}
