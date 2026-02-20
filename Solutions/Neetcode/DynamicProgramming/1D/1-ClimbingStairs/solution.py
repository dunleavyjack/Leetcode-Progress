class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2:
            return n

        if n == 2:
            return 2

        prev = 1
        curr = 2

        for _ in range(2, n):
            prev, curr = curr, curr + prev

        return curr
