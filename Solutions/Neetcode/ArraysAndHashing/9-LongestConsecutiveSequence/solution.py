from typing import List


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        res = 0
        num_set = set(nums)

        for num in num_set:
            is_starting_num = num - 1 not in num_set
            if is_starting_num:
                seq_len = 0
                while num + seq_len in num_set:
                    seq_len += 1

                res = max(res, seq_len)

        return res
