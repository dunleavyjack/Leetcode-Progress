function similarPairs(words: string[]): number {
  const wordsByOccurenceOfUniqueChars = new Map<string, number>();
  let result = 0;

  for (const word of words) {
    const wordFreqBucket = Array(26).fill(0);

    for (const letter of word) {
      const letterNumber = letter.charCodeAt(0) - "a".charCodeAt(0);
      wordFreqBucket[letterNumber] = 1;
    }

    const wordFreqKey = wordFreqBucket.join("");
    wordsByOccurenceOfUniqueChars.set(
      wordFreqKey,
      (wordsByOccurenceOfUniqueChars.get(wordFreqKey) || 0) + 1,
    );
  }

  for (const occurence of wordsByOccurenceOfUniqueChars.values()) {
    if (occurence > 1) result += (occurence * (occurence - 1)) / 2;
  }

  return result;
}
