function subarraySum(nums: number[], k: number): number {
  let result = 0;
  let subArraySum = 0;

  let subArraySums = new Map<number, number>(); // {subArraySum, occurence}
  subArraySums.set(0, 1);

  for (let num of nums) {
    subArraySum += num;

    const complimentSum = subArraySum - k;
    result += subArraySums.get(complimentSum) || 0;

    subArraySums.set(subArraySum, (subArraySums.get(subArraySum) || 0) + 1);
  }

  return result;
}
