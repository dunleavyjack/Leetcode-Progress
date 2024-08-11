export function scoreOfString(s: string): number {
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if (!s[i + 1]) break;
    sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }

  return sum;
}
