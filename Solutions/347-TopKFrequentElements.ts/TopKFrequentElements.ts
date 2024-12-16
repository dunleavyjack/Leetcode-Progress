export function topKFrequent(nums: number[], k: number): number[] {
  const result: number[] = [];

  // Create a map to keep track of the frequency of all nums
  const frequencyOfNums = new Map<number, number>(); // { nums, numsFrequency }

  // Iterate through the `nums` array, using the hashmap to track frequency
  for (const num of nums) {
    frequencyOfNums.set(num, (frequencyOfNums.get(num) || 0) + 1);
  }

  // Create an array to sort the nums by their frequency
  const frequencyArray = Array(nums.length + 1).fill([]);

  // Group numbers by their frequency in the array
  for (const [num, frequency] of frequencyOfNums) {
    frequencyArray[frequency] = [...frequencyArray[frequency], num];
  }

  // Iterate backwards through the frequency array until k elements are reached
  for (let i = frequencyArray.length - 1; i >= 0 && result.length < k; i--) {
    if (!frequencyArray[i].length) continue;
    frequencyArray[i].forEach((num: number) => {
      result.push(num);
    });
  }

  return result;
}
