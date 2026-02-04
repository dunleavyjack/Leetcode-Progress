export function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  let s1Freq = new Map<string, number>();
  for (let char of s1) {
    s1Freq.set(char, (s1Freq.get(char) || 0) + 1);
  }

  const windowFreq = new Map<string, number>();

  let left = 0;
  for (let right = 0; right < s2.length; right++) {
    const char = s2[right];

    // Character does not exist in s2 (current window broken)
    if (!s1Freq.has(char)) {
      left = right + 1;
      windowFreq.clear();
      continue;
    }

    // Add new character to window frequency count
    windowFreq.set(char, (windowFreq.get(char) || 0) + 1);

    // Make sure char freq (in the window) of latest char doest exceed their freq in s1
    while (windowFreq.get(char)! > s1Freq.get(char)!) {
      // If that's the case, remove the leftern-most char from the window
      const leftChar = s2[left];
      windowFreq.set(leftChar, windowFreq.get(leftChar)! - 1);
      left++;
    }

    console.log(windowFreq);
    const windowLength = right - left + 1;
    if (windowLength === s1.length) return true;
  }

  return false;
}
