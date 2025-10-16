function findLucky(arr: number[]): number {
  let freqMap = new Map<number, number>();

  for (let num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  let largestLuckyInt = -1; // Default if no lucky int found
  for (const [num, freq] of freqMap) {
    if (num === freq) {
      largestLuckyInt = Math.max(largestLuckyInt, num);
    }
  }

  return largestLuckyInt;
}
