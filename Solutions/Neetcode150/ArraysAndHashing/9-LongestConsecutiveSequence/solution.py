from typing import List


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        unique_nums = set(nums)
        res = 0

        for num in unique_nums:
            if num - 1 not in unique_nums:
                seqLen = 0
                seqNum = num
                while seqNum in unique_nums:
                    seqLen += 1
                    seqNum += 1

                res = max(res, seqLen)

        return res
