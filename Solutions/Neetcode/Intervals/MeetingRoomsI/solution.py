from typing import List


class Solution:
    def canAttendMeetings(self, intervals: List[List[int]]) -> bool:
        intervals.sort(key=lambda interval: interval[0])

        if not intervals:
            return True

        prev_end = intervals[0][1]
        for start, end in intervals[1:]:
            if start < prev_end:
                return False
            prev_end = end

        return True
