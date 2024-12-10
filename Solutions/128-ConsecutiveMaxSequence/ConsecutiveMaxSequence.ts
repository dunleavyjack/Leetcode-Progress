function longestConsecutive(nums: number[]): number {
  // Create a set of all unique characters from nums
  const uniqueNums = new Set(nums);
  let maxSequence = 0;

  // Iterate through the set, checking if it doesn't contain a number one less than the current.
  // This means, the current number could be the start of a subsequence.
  for (let num of uniqueNums) {
    if (!uniqueNums.has(num - 1)) {
      // Then, increment current sequence as long as num + 1 exists in the set.
      let currentSequenceLength = 1;
      while (uniqueNums.has(num + currentSequenceLength)) {
        currentSequenceLength++;
      }

      // Compare with the max sequece and set to the greatest value
      maxSequence = Math.max(currentSequenceLength, maxSequence);
    }
  }

  return maxSequence;
}
