function combinationSum(candidates: number[], target: number): number[][] {
  let result: number[][] = [];

  function dfs(i: number, subsets: number[], currentSum: number) {
    // Base case
    if (i >= candidates.length) {
      if (currentSum === target) result.push([...subsets]);
      return;
    }

    // Check if num can be added to result
    if (candidates[i] + currentSum <= target) {
      // Decide to add num (won't increment i as num might be used again)
      subsets.push(candidates[i]);
      dfs(i, subsets, currentSum + candidates[i]);

      // Decide NOT to add num
      subsets.pop();
      dfs(i + 1, subsets, currentSum);
    } else {
      dfs(i + 1, subsets, currentSum);
    }
  }

  dfs(0, [], 0);

  return result;
}
