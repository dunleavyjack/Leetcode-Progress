from typing import List


class Solution:
    def canJump(self, nums: List[int]) -> bool:
        target = len(nums) - 1

        for i in range(len(nums) - 1, -1, -1):
            jump = nums[i]
            if i + jump >= target:
                target = i

        return target == 0
