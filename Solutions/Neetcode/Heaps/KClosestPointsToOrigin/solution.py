from heapq import heappop, heappush
from typing import List


class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        heap = []

        for x, y in points:
            distance = -((x**2) + (y**2))
            heappush(heap, (distance, x, y))

            if len(heap) > k:
                heappop(heap)

        res = []
        for distance, x, y in heap:
            res.append([x, y])

        return res
