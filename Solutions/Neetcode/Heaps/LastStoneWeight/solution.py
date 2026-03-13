from heapq import heappop, heappush, heapify
from typing import List


class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        max_heap = [-s for s in stones]
        heapify(max_heap)

        while len(max_heap) > 1:
            y = heappop(max_heap)
            x = heappop(max_heap)

            if x == y:
                continue

            heappush(max_heap, y - x)

        return -max_heap[0] if max_heap else 0
