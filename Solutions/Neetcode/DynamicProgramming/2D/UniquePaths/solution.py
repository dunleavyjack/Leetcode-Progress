class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        memo = {}

        def helper(m, n):
            memo_key = f"{m}-{n}"

            if memo_key in memo:
                return memo[memo_key]

            if m == 1 or n == 1:
                return 1

            paths = helper(m - 1, n) + helper(m, n - 1)
            memo[memo_key] = paths

            return paths

        return helper(m, n)
