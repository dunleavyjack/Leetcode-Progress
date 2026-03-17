from typing import List


class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda interval: interval[0])

        res = []
        for start, end in intervals:
            if res:
                last_end = res[-1][1]
                if start <= last_end:
                    res[-1][1] = max(last_end, end)
                    continue

            res.append([start, end])

        return res
