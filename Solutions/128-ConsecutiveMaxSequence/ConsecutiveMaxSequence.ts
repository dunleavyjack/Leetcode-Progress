function longestConsecutive(nums: number[]): number {
  let uniqueNums = new Set<number>(nums);
  let maxConsecutive = 0;

  // Iterate through only the unique numbers in nums (using the set!)
  for (let num of uniqueNums) {
    // Skip any nums that aren't the start of a sequence
    if (uniqueNums.has(num - 1)) continue;

    // Assuming this is now the start of a sequence, keep checking the set if the next consecutive number also exists
    let currConsecutive = 1;
    while (uniqueNums.has(num + currConsecutive)) {
      currConsecutive++;
    }

    // Once the end of a sequence is reached, compare it with the current max
    maxConsecutive = Math.max(maxConsecutive, currConsecutive);
  }

  return maxConsecutive;
}
