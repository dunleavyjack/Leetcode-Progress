from typing import List


class Solution:
    def insert(
        self, intervals: List[List[int]], newInterval: List[int]
    ) -> List[List[int]]:
        res = []

        for i in range(len(intervals)):
            start, end = intervals[i]
            new_start, new_end = newInterval

            if new_end < start:
                res.append(newInterval)
                return res + intervals[i:]
            elif end < new_start:
                res.append([start, end])
            else:
                new_start = min(new_start, start)
                new_end = max(new_end, end)
                newInterval = [new_start, new_end]

        res.append(newInterval)

        return res
