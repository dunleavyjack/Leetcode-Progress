function topKFrequent(nums: number[], k: number): number[] {
  const freqMap = new Map<number, number>(); // {number, freq}

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const sortedNumsBucket: number[][] = Array(nums.length).fill([]);
  for (const [num, freq] of freqMap) {
    sortedNumsBucket[freq] = [...(sortedNumsBucket[freq] || []), num];
  }

  let result: number[] = [];

  for (let i = nums.length; i >= 0; i--) {
    if (!sortedNumsBucket[i]) continue;

    for (let num of sortedNumsBucket[i]) {
      result.push(num);
    }

    if (result.length === k) break;
  }

  return result;
}
