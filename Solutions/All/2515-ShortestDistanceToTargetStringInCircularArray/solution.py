from collections import defaultdict
from typing import List


class Solution:
    def closestTarget(self, words: List[str], target: str, startIndex: int) -> int:
        words_to_index = defaultdict(list)
        for i, word in enumerate(words):
            words_to_index[word].append(i)

        if target not in words_to_index:
            return -1

        best = float("inf")
        for i in words_to_index[target]:
            distance_right = (i - startIndex) % len(words)
            best = min(distance_right, best)

            distance_left = (startIndex - i) % len(words)
            best = min(distance_left, best)

        return int(best)
