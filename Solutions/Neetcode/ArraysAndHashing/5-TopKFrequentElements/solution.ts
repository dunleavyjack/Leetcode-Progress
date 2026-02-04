export function topKFrequent(nums: number[], k: number): number[] {
  let numFreqMap = new Map<number, number>();

  for (let num of nums) {
    numFreqMap.set(num, (numFreqMap.get(num) || 0) + 1);
  }

  const numFreqArray = Array.from(
    { length: nums.length + 1 },
    (): number[] => new Array<number>(),
  );
  for (const [num, freq] of numFreqMap) {
    numFreqArray[freq].push(num);
  }

  let result: number[] = [];
  for (let i = numFreqArray.length; i >= 0 && result.length < k; i--) {
    if (!numFreqArray[i]) continue;
    result.push(...numFreqArray[i]);
  }

  return result;
}
