export function isAnagram(s: string, t: string): boolean {
  let sCharFreq = new Map<string, number>();
  let tCharFreq = new Map<string, number>();

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    sCharFreq.set(s[i], (sCharFreq.get(s[i]) || 0) + 1);
    tCharFreq.set(t[i], (tCharFreq.get(t[i]) || 0) + 1);
  }

  for (const [sChar, sFreq] of sCharFreq) {
    if (tCharFreq.get(sChar) !== sFreq) return false;
  }

  return true;
}
