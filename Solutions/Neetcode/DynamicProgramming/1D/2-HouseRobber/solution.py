from typing import List


class Solution:
    def rob(self, nums: List[int]) -> int:
        rob1, rob2 = 0, 0

        for n in nums:
            rob1, rob2 = rob2, max(rob2, n + rob1)

        return rob2
