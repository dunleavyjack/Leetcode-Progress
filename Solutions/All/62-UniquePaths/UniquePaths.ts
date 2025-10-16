function uniquePaths(m: number, n: number, memo = {}): number {
  // Create a key to check if the result is stored in the memo
  const key = `${m},${n}`;
  // If the key exists, return the value stored in the memo
  if (key in memo) return memo[key];

  let result: number;
  if (m === 0 || n === 0) result = 0;
  else if (m === 1 && n === 1) result = 1;
  else result = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);

  memo[key] = result;
  return result;
}
