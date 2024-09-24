export function uncommonFromSentences(s1: string, s2: string): string[] {
  const wordFreq = new Map<string, number>();
  const uniqueWords: string[] = [];

  const s1Words = s1.split(" ");
  const s2Words = s2.split(" ");

  for (const word of s1Words) {
    wordFreq.set(word, (wordFreq.get(word) || 0) + 1);
  }

  for (const word of s2Words) {
    wordFreq.set(word, (wordFreq.get(word) || 0) + 1);
  }

  for (const [word, freq] of wordFreq) {
    if (freq === 1) uniqueWords.push(word);
  }

  return uniqueWords;
}
