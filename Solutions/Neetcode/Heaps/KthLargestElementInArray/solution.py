from typing import List
from heapq import heappop, heapify


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heap = nums
        heapify(heap)

        while len(heap) > k:
            heappop(heap)

        return heap[0]
