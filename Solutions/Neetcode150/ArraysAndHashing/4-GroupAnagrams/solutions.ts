export function groupAnagrams(strs: string[]): string[][] {
  const letterCountToWords = new Map<string, string[]>(); // {stringified}

  for (const str of strs) {
    const charFreqBucket = new Array<number>(26).fill(0);

    for (let char of str) {
      const letterNumber = getLetterOrderNumber(char);
      charFreqBucket[letterNumber]++;
    }

    const key = charFreqBucket.toString();
    letterCountToWords.set(key, [...(letterCountToWords.get(key) || []), str]);
  }

  let result: string[][] = [];
  for (const anagrams of letterCountToWords.values()) {
    result.push(anagrams);
  }

  return result;
}

export function getLetterOrderNumber(char: string) {
  const aCharCode = "a".charCodeAt(0);
  return char.toLowerCase().charCodeAt(0) - aCharCode;
}
