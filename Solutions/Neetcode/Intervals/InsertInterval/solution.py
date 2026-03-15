from typing import List


class Solution:
    def insert(
        self, intervals: List[List[int]], newInterval: List[int]
    ) -> List[List[int]]:
        res = []

        for i in range(len(intervals)):
            start, end = intervals[i]
            new_interval_start, new_interval_end = newInterval

            if new_interval_end < start:
                res.append(newInterval)
                return res + intervals[i:]
            elif end < new_interval_start:
                res.append([start, end])
            else:
                new_start = min(start, new_interval_start)
                new_end = max(end, new_interval_end)
                newInterval = [new_start, new_end]

        res.append(newInterval)
        return res
