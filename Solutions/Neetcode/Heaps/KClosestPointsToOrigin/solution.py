from heapq import heappop, heappush
from typing import List


class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        # Create empty *max* heap. Since we want k smallest, we'll want to easily remove max elements
        max_heap = []

        # Calculate the distance for each pair of points and add to heap
        for (
            x,
            y,
        ) in points:
            # For the distance, the sqrt part can be skipped
            distance = (x**2) + (y**2)
            heappush(max_heap, (-distance, x, y))

            # To keep the heap at size k, remove max elements if limit reached
            if len(max_heap) > k:
                heappop(max_heap)

        # Iterate through the heap (now size k) and add to result
        res = []
        for distance, x, y in max_heap:
            res.append([x, y])

        return res
