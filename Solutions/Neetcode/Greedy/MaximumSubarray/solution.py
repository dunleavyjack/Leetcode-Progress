from typing import List


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_sum = float("-inf")
        curr_sum = 0

        # Kandane's algo.
        for num in nums:
            curr_sum += num
            max_sum = max(max_sum, curr_sum)

            if curr_sum < 0:
                curr_sum = 0

        return int(max_sum)
