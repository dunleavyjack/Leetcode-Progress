class Solution {
    fun validPalindrome(s: String): Boolean {
        var left = 0
        var right = s.length - 1

        while (left <= right) {
            if (s[left] != s[right]) {
                return isValidPalindrome(s, left + 1, right) || isValidPalindrome(s, left, right - 1)
            }
            left++
            right--
        }

        return true
    }

    fun isValidPalindrome(
        s: String,
        left: Int,
        right: Int,
    ): Boolean {
        var leftPointer = left
        var rightPointer = right

        while (leftPointer <= rightPointer) {
            if (s[left] != s[right]) {
                return false
            }
            leftPointer++
            rightPointer--
        }

        return true
    }
}
