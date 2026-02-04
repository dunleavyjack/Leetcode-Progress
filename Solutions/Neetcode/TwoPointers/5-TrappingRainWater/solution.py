from typing import List


class Solution:
    def trap(self, height: List[int]) -> int:
        max_right = 0
        max_right_list = [0] * len(height)

        for i in range(len(height) - 1, -1, -1):
            max_right_list[i] = max_right
            max_right = max(max_right, height[i])

        max_left = 0
        max_left_list = [0] * len(height)

        total_water = 0

        for i in range(len(height)):
            max_left_list[i] = max_left
            max_left = max(max_left, height[i])

            water = min(max_left_list[i], max_right_list[i]) - height[i]

            if water > 0:
                total_water += water

        return total_water
