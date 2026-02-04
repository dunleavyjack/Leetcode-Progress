function longestConsecutive(nums: number[]): number {
  const uniqueNums = new Set(nums);
  let maxConsecutive = 0;

  for (const num of uniqueNums) {
    if (!uniqueNums.has(num - 1)) {
      let sequenceLength = 0;
      while (uniqueNums.has(num + sequenceLength)) {
        sequenceLength++;
        maxConsecutive = Math.max(sequenceLength, maxConsecutive);
      }
    }
  }

  return maxConsecutive;
}
