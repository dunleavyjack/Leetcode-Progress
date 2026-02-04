from collections import defaultdict


class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        window = defaultdict(int)
        max_freq_in_window = 0
        res = 0

        l, r = 0, 0

        while r < len(s):
            window[s[r]] += 1
            max_freq_in_window = max(max_freq_in_window, window[s[r]])

            window_length = r - l + 1
            if window_length - max_freq_in_window > k:
                window[s[l]] -= 1
                l += 1
                window_length -= 1

            res = max(res, window_length)
            r += 1

        return res
