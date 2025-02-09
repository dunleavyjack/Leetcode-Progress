function twoSum(nums: number[], target: number): number[] {
  let visitedNums = new Map<number, number>(); // {num, index}
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (visitedNums.has(complement)) {
      result = [i, visitedNums.get(complement)!];
      break;
    } else visitedNums.set(nums[i], i);
  }

  return result;
}
