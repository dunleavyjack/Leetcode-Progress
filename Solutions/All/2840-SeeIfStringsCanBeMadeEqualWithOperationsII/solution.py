from collections import defaultdict


class Solution:
    def checkStrings(self, s1: str, s2: str) -> bool:
        if len(s1) != len(s2):
            return False

        s1_even_count = defaultdict(int)
        s1_odd_count = defaultdict(int)

        s2_even_count = defaultdict(int)
        s2_odd_count = defaultdict(int)

        for i in range(len(s1)):
            if i % 2 == 0:
                s1_even_count[s1[i]] += 1
                s2_even_count[s2[i]] += 1
            else:
                s1_odd_count[s1[i]] += 1
                s2_odd_count[s2[i]] += 1

        for num, freq in s1_even_count.items():
            if s2_even_count[num] != freq:
                return False

        for num, freq in s1_odd_count.items():
            if s2_odd_count[num] != freq:
                return False

        return True
