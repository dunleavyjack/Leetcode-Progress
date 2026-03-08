from typing import List


class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])

        max_area = 0

        def dfs(r, c):
            if r < 0 or c < 0 or r >= ROWS or c >= COLS or grid[r][c] != 1:
                return 0

            grid[r][c] = 0

            up = dfs(r + 1, c)
            down = dfs(r - 1, c)
            right = dfs(r, c + 1)
            left = dfs(r, c - 1)

            return up + down + right + left + 1

        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == 1:
                    count = dfs(r, c)
                    max_area = max(max_area, count)

        return max_area
