function characterReplacement(s: string, k: number): number {
  let windowCharFreq = new Map<string, number>(); // { char: freq }
  let maxCharFreq = 0;
  let result = 0;

  let left = 0;
  for (let right = 0; right < s.length; right++) {
    // On each iteration, update the freq of the latest char
    windowCharFreq.set(s[right], (windowCharFreq.get(s[right]) || 0) + 1);

    // Also, check if the latest char is now the most frequently occuring char and updat the count if so
    maxCharFreq = Math.max(maxCharFreq, windowCharFreq.get(s[right])!);

    // Check if the current window has extended past k size
    const windowLength = right - left + 1;
    if (windowLength - maxCharFreq > k) {
      // If so, move the left pointer intward and update the freq map
      const leftMostChar = s[left];
      windowCharFreq.set(leftMostChar, windowCharFreq.get(leftMostChar)! - 1);
      left++;
    }

    // Update the result
    result = Math.max(result, right - left + 1);
  }

  return result;
}
