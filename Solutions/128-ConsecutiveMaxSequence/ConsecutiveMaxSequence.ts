function longestConsecutive(nums: number[]): number {
  let uniqueNums = new Set<number>(nums);
  let maxConsecutiveLen = 0;

  for (let num of uniqueNums) {
    if (!uniqueNums.has(num - 1)) {
      let currConsecutiveLen = 1;
      while (uniqueNums.has(num + currConsecutiveLen)) {
        currConsecutiveLen++;
      }
      maxConsecutiveLen = Math.max(maxConsecutiveLen, currConsecutiveLen);
    }
  }

  return maxConsecutiveLen;
}
