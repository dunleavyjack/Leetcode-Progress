from typing import List


class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        l, r = 0, len(letters) - 1

        candidate = None

        while l <= r:
            mid = (l + r) // 2

            if target < letters[mid]:
                candidate = letters[mid]
                r = mid - 1
            else:
                l = mid + 1

        if candidate:
            return candidate
        else:
            return letters[0]
