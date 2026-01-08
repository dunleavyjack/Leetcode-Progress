from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        visitedNums = {}

        for i, num in enumerate(nums):
            compliment = target - num
            if compliment in visitedNums:
                return [visitedNums[compliment], i]

            visitedNums[num] = i

        return [-1, -1]
