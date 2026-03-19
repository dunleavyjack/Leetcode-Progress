from typing import List


class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda interval: interval[0])

        if not intervals:
            return []

        res = [intervals[0]]

        for i in range(1, len(intervals)):
            prev_end = res[-1][1]
            start, end = intervals[i]

            if start > prev_end:
                res.append(intervals[i])
            else:
                res[-1][1] = max(end, prev_end)

        return res
