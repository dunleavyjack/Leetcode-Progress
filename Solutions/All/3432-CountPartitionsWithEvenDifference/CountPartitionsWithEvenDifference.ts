export function countPartitions(nums: number[]): number {
  let prefixSum = 0;
  let prefixSums = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    prefixSums[i] = prefixSum;
  }

  let postfixSum = 0;
  let postfixSums = new Array(nums.length).fill(0);

  for (let i = nums.length - 1; i >= 0; i--) {
    postfixSum += nums[i];
    postfixSums[i] = postfixSum;
  }

  let numEven = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    const prefixSum = prefixSums[i];
    const postfixSum = postfixSums[i + 1];

    if ((prefixSum - postfixSum) % 2 === 0) numEven++;
  }

  return numEven;
}
