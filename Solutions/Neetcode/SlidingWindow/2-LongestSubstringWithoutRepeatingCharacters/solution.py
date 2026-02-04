class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l, r = 0, 0

        window = set()
        max_window_size = 0

        while r < len(s):
            char = s[r]
            while char in window:
                window.remove(s[l])
                l += 1

            window.add(char)
            max_window_size = max(max_window_size, len(window))
            r += 1

        return max_window_size
