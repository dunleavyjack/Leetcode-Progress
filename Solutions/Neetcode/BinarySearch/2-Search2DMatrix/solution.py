from typing import List


class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        for row in matrix:
            if target <= row[-1]:
                l, r = 0, len(row) - 1

                while l <= r:
                    mid = (l + r) // 2
                    if row[mid] == target:
                        return True

                    if row[mid] > target:
                        r = mid - 1
                    else:
                        l = mid + 1

        return False
