function twoSum(nums: number[], target: number): number[] {
  let visitedNums = new Map<number, number>(); // {number, index}

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (visitedNums.has(compliment)) {
      const complimentIndex = visitedNums.get(compliment)!;
      return [i, complimentIndex];
    }

    visitedNums.set(nums[i], i);
  }

  return [-1, -1];
}
