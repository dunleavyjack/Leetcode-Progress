function climbStairs(n: number, memo = {}): number {
  if (n in memo) return memo[n];
  if (n === 1 || n === 2) return n;

  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
}
