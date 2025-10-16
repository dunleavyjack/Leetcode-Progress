function isAnagram(s: string, t: string): boolean {
  let freqS = new Map<string, number>();
  let freqT = new Map<string, number>();

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    freqS.set(s[i], (freqS.get(s[i]) || 0) + 1);
    freqT.set(t[i], (freqT.get(t[i]) || 0) + 1);
  }

  for (let [char, freq] of freqS) {
    if (freqT.get(char) !== freq) return false;
  }

  return true;
}
