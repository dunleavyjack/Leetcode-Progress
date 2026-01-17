from collections import defaultdict


class Solution:
    def minWindow(self, s: str, t: str) -> str:
        min_window_len = float("infinity")
        min_window_index = [-1, -1]

        tFreq = defaultdict(int)
        for char in t:
            tFreq[char] += 1

        window = defaultdict(int)
        need = len(tFreq)
        have = 0

        l, r = 0, 0
        while r < len(s):
            char = s[r]
            window[char] += 1

            if char in tFreq and window[char] == tFreq[char]:
                have += 1

            while have == need:
                window_len = r - l + 1
                if window_len < min_window_len:
                    min_window_len = window_len
                    min_window_index = [l, r]

                lChar = s[l]
                window[lChar] -= 1
                if lChar in tFreq and window[lChar] < tFreq[lChar]:
                    have -= 1
                l += 1
            r += 1

        if min_window_len == float("infinity"):
            return ""
        else:
            l, r = min_window_index
            return s[l : r + 1]
