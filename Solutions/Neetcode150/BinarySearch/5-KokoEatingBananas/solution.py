import math
from typing import List


class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        low = 1
        high = max(piles)

        best = high

        while low <= high:
            speed = (high + low) // 2
            hoursToEatBananas = 0
            for pile in piles:
                hoursToEatBananas += math.ceil(pile / speed)

            if hoursToEatBananas <= h:
                best = speed
                high = speed - 1
            else:
                low = speed + 1

        return best
