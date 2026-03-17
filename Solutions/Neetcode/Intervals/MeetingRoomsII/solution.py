from typing import List
from heapq import heappop, heappush


class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda interval: interval[0])

        heap = [intervals[0][1]]  # end times

        for start, end in intervals[1:]:
            if heap and heap[0] <= start:
                heappop(heap)

            heappush(heap, end)

        return len(heap)
