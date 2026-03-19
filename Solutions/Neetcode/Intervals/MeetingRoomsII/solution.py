from typing import List
from heapq import heappop, heappush


class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda i: i[0])

        rooms = [intervals[0][1]]  # min heap of room end times for concurrent meetings

        for start, end in intervals[1:]:
            if rooms and start >= rooms[0]:
                heappop(rooms)

            heappush(rooms, end)

        return len(rooms)
