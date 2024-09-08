function characterReplacement(s: string, k: number): number {
  const count = new Map<string, number>();
  let result = 0;

  let left = 0;
  let maxFrequency = 0;

  for (let right = 0; right < s.length; right++) {
    count.set(s[right], (count.get(s[right]) || 0) + 1);
    maxFrequency = Math.max(maxFrequency, count.get(s[right])!);

    const windowLength = right - left + 1;
    if (windowLength - maxFrequency > k) {
      count.set(s[left], count.get(s[left])! - 1);
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
}
