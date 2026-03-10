from heapq import heappop, heappush, heapify
from typing import List


class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        heap = [-s for s in stones]
        heapify(heap)

        while len(heap) > 1:
            y = heappop(heap)
            x = heappop(heap)

            if x == y:
                continue

            heappush(heap, y - x)

        return -heap[0] if heap else 0
