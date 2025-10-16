package solutions

func validPalindrome(s string) bool {
	left := 0
	right := len(s) - 1

	for left <= right {
		if s[left] != s[right] {
			return isValidPalindrome(s, left+1, right) || isValidPalindrome(s, left, right-1)
		}

		left++
		right--
	}
	return true
}

func isValidPalindrome(s string, left int, right int) bool {
	for left <= right {
		if s[left] != s[right] {
			return false
		}

		left++
		right--
	}

	return true
}
