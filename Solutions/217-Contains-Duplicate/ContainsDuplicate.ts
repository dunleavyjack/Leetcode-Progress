// O(n) time and space solution
function containsDuplicate(nums: number[]): boolean {
  let uniqueNums = new Set<number>();

  for (let num of nums) {
    if (uniqueNums.has(num)) return true;
    else uniqueNums.add(num);
  }

  return false;
}

// Constant space, but 0(n log n) solution
function containsDuplicateConstantSpace(nums: number[]): boolean {
  nums = nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) return true;
  }

  return false;
}
