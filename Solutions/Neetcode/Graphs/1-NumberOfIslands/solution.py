from typing import List


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])
        num_islands = 0

        def fill_island(r, c):
            if r < 0 or c < 0 or r >= ROWS or c >= COLS or grid[r][c] != "1":
                return

            grid[r][c] = "0"

            fill_island(r + 1, c)
            fill_island(r - 1, c)
            fill_island(r, c + 1)
            fill_island(r, c - 1)

        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == "1":
                    num_islands += 1
                    fill_island(r, c)

        return num_islands
