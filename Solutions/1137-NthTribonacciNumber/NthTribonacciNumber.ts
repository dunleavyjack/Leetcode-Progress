function tribonacci(n: number, memo = {}): number {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  let result =
    tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
  memo[n] = result;

  return result;
}
