from typing import List


class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        max_area = 0
        stack = []  # ( index, height )

        for i, height in enumerate(heights + [0]):
            left_most_visited = i

            while stack and stack[-1][1] > height:
                left_i, left_height = stack.pop()
                area = left_height * (i - left_i)
                max_area = max(area, max_area)
                left_most_visited = left_i

            stack.append((left_most_visited, height))

        return max_area
