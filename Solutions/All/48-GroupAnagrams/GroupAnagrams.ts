function groupAnagrams(strs: string[]): string[][] {
  const anagramMap = new Map<string, string[]>(); // { stringifiedCharFreq, stringsWithSameFreq }

  for (let word of strs) {
    const charFreqBucket = Array.from({ length: 26 }, () => 0);

    for (let char of word) {
      const charAlphabetOrder = getCharAlphabetOrder(char);
      charFreqBucket[charAlphabetOrder]++;
    }

    const anagramMapKey = charFreqBucket.toString();
    anagramMap.set(anagramMapKey, [
      ...(anagramMap.get(anagramMapKey) || []),
      word,
    ]);
  }

  return [...anagramMap.values()];
}

function getCharAlphabetOrder(char: string) {
  return char.charCodeAt(0) - "a".charCodeAt(0);
}
