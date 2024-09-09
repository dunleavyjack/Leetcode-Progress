function checkInclusion(s1: string, s2: string): boolean {
  if (s2.length < s1.length) return false;

  let s1Count = new Array(26).fill(0);
  let s2Count = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
    s2Count[s2[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }

  let matches = 0;
  for (let i = 0; i < 26; i++) {
    matches += s1Count[i] === s2Count[i] ? 1 : 0;
  }

  let left = 0;
  for (let right = s1.length; right < s2.length; right++) {
    if (matches === 26) return true;

    const addedIndex = s2[right].charCodeAt(0) - "a".charCodeAt(0);
    s2Count[addedIndex] += 1;
    if (s1Count[addedIndex] === s2Count[addedIndex]) {
      matches += 1;
    } else if (s1Count[addedIndex] + 1 === s2Count[addedIndex]) {
      matches -= 1;
    }

    const removedIndex = s2[left].charCodeAt(0) - "a".charCodeAt(0);
    s2Count[removedIndex] -= 1;
    if (s1Count[removedIndex] === s2Count[removedIndex]) {
      matches += 1;
    } else if (s1Count[removedIndex] - 1 === s2Count[removedIndex]) {
      matches -= 1;
    }

    left++;
  }

  return matches === 26;
}
