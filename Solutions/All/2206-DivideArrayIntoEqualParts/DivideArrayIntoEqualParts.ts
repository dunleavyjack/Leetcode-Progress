function divideArray(nums: number[]): boolean {
  let numFreq = new Map<number, number>(); // { number: frequency }

  // Populate the freq map with the frequency of each number
  for (let num of nums) {
    numFreq.set(num, (numFreq.get(num) || 0) + 1);
  }

  // Iterate through the values of the frequency map (which are the frequencies of each number) and ensure all are even.
  for (let freq of numFreq.values()) {
    if (freq % 2 !== 0) return false;
  }

  return true;
}
