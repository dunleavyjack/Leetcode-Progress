function findMatrix(nums: number[]): number[][] {
  let result: number[][] = [];
  let freqMap = new Map<number, number>(); // num, freq

  for (let num of nums) {
    const currentFreq = freqMap.get(num) ?? 0;
    freqMap.set(num, currentFreq + 1);
  }

  for (const [num, freq] of freqMap) {
    for (let i = 0; i < freq; i++) {
      result[i] = [...(result[i] || []), num];
    }
  }

  return result;
}
