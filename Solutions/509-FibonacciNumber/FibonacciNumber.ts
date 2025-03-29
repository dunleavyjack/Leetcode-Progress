function fib(n: number, memo = {}): number {
  if (n in memo) return memo[n];

  let result: number;
  if (n === 0 || n === 1) {
    result = n;
  } else {
    result = fib(n - 1, memo) + fib(n - 2, memo);
  }

  memo[n] = result;
  return result;
}
