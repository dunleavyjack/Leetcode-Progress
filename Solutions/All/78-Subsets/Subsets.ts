function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  function dfs(i: number, currentSubset: number[]) {
    if (i >= nums.length) {
      result.push([...currentSubset]);
      return;
    }

    // Decide to add number
    currentSubset.push(nums[i]);
    dfs(i + 1, currentSubset);

    // Decide NOT to add number
    currentSubset.pop();
    dfs(i + 1, currentSubset);
  }

  dfs(0, []);

  return result;
}
