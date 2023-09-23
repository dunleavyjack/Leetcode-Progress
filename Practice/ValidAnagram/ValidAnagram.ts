export function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    let sFreq = new Map<string, number>();
    let tFreq = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        sFreq.set(s[i], (sFreq.get(s[i]) || 0) + 1);
        tFreq.set(t[i], (tFreq.get(t[i]) || 0) + 1);
    }

    for (const [key, value] of sFreq) {
        if (tFreq.get(key) !== value) return false;
    }

    return true;
}
