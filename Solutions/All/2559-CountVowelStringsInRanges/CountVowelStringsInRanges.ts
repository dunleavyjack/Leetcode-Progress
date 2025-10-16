function vowelStrings(words: string[], queries: number[][]): number[] {
  let prefixSumArr: number[] = [0];
  let prefixSum = 0;

  for (let word of words) {
    if (isWordBeginningAndEndingWithVowel(word)) {
      prefixSum++;
    }

    prefixSumArr.push(prefixSum);
  }

  let result: number[] = [];
  for (const [start, end] of queries) {
    const numOfWordsBeginningAndEndingWithVowel =
      prefixSumArr[end + 1] - prefixSumArr[start];
    result.push(numOfWordsBeginningAndEndingWithVowel);
  }

  return result;
}

function isWordBeginningAndEndingWithVowel(word: string) {
  return isVowel(word[0]) && isVowel(word[word.length - 1]);
}

function isVowel(char: string) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  return vowels.has(char);
}
