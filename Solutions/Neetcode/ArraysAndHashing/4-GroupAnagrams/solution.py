from typing import List
from collections import defaultdict


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groupedAnagrams = defaultdict(list)

        for word in strs:
            bucket = [0] * 26

            for char in word:
                charCode = ord(char) - ord("a")
                bucket[charCode] += 1

            key = tuple(bucket)
            groupedAnagrams[key].append(word)

        return list(groupedAnagrams.values())
