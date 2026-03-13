from typing import List
from heapq import heappop, heappush


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        # Create empty min heap
        min_heap = []

        # Add nums to min heap, maintaining k length for the heap to keep space complexity low
        for num in nums:
            heappush(min_heap, num)

            # When heap extends past length k, pop
            if len(min_heap) > k:
                heappop(min_heap)

        # Return min element from heap (which is the k largest)
        return min_heap[0]
