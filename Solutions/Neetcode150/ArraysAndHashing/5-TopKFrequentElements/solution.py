from typing import List
from collections import defaultdict


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freqMap = defaultdict(int)
        for num in nums:
            freqMap[num] += 1

        freqList = [[] for _ in range(len(nums) + 1)]

        for num, freq in freqMap.items():
            freqList[freq].append(num)

        result = []
        for nums in reversed(freqList):
            result.extend(nums)
            if len(result) >= k:
                break
        return result
