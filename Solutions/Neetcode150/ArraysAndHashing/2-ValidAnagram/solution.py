class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        sFreq = {}
        tFreq = {}

        if len(s) != len(t):
            return False

        for i in range(len(s)):
            sFreq[s[i]] = sFreq.get(s[i], 0) + 1
            tFreq[t[i]] = tFreq.get(t[i], 0) + 1

        for char, freq in sFreq.items():
            if freq != tFreq.get(char):
                return False

        return True
