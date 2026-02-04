export function containsDuplicate(nums: number[]): boolean {
  let uniqueNums = new Set<number>();

  for (let num of nums) {
    if (uniqueNums.has(num)) return true;
    uniqueNums.add(num);
  }

  return false;
}
