export function twoSum(nums: number[], target: number): number[] {
  let visitedNumsToIndex = new Map<number, number>(); // { num, index }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const compliment = target - num;

    if (visitedNumsToIndex.has(compliment)) {
      const complimentIndex = visitedNumsToIndex.get(compliment)!;
      return [i, complimentIndex];
    }

    visitedNumsToIndex.set(num, i);
  }

  return [-1, -1];
}
