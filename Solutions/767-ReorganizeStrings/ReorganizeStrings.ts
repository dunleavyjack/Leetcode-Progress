function reorganizeString(s: string): string {
  let freqMap = new Map<string, number>();
  for (let char of s) freqMap.set(char, (freqMap.get(char) || 0) + 1);

  // Use a priorityQueue that stores [char, freq] in sorted (descending) order
  let priorityQueue: [string, number][] = Array.from(freqMap.entries());
  priorityQueue.sort((a, b) => b[1] - a[1]);

  // Early return if the most frequent character occurs more than half of the times in the string
  if (priorityQueue[0][1] > Math.ceil(s.length / 2)) return "";

  // Use an array to store the result (will need to be joined later on);
  const result = Array(s.length);
  let resultPointer = 0;

  // Iterate through the sorted priorityQueue. Staring from 0 and as long as a freq exists for each char,
  // insert at all even elements. If the resultPointer extends outside of the result's length, set it to one
  for (let [char, freq] of priorityQueue) {
    while (freq) {
      if (resultPointer >= result.length) {
        resultPointer = 1;
      }
      result[resultPointer] = char;
      resultPointer += 2;
      freq--;
    }
  }

  // Join the array into a string and return
  return result.join("");
}
