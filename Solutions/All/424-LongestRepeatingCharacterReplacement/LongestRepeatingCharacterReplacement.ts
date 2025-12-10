export function characterReplacement(s: string, k: number): number {
  const windowCharFreq = new Map<string, number>();
  let maxCharFreq = 0;
  let result = 0;

  let left = 0;
  for (let right = 0; right < s.length; right++) {
    windowCharFreq.set(s[right], (windowCharFreq.get(s[right]) || 0) + 1);
    maxCharFreq = Math.max(maxCharFreq, windowCharFreq.get(s[right])!);

    let windowLength = right - left + 1;
    if (windowLength - maxCharFreq > k) {
      windowCharFreq.set(s[left], windowCharFreq.get(s[left])! - 1);
      left++;
      windowLength--;
    }

    result = Math.max(result, windowLength);
  }

  return result;
}
