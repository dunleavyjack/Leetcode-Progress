function subsetsWithDup(nums: number[]): number[][] {
  const uniqueSubsets = new Set<string>();
  const result: number[][] = [];

  // Answer requires sorted output
  nums = nums.sort((a, b) => a - b);

  function dfs(i: number, subset: number[]) {
    if (i >= nums.length) {
      // Before adding the subset, check if it already exists in the set
      const subsetKey = subset.join("");
      if (!uniqueSubsets.has(subsetKey)) {
        uniqueSubsets.add(subsetKey);
        result.push([...subset]);
      }
      return;
    }

    // Decide to add number
    subset.push(nums[i]);
    dfs(i + 1, subset);

    // Decide not to add number`
    subset.pop();
    dfs(i + 1, subset);
  }

  dfs(0, []);

  return result;
}
