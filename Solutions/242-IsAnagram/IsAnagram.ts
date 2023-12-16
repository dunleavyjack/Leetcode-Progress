function isAnagram(s: string, t: string): boolean {
    const freqMapS = new Map<string, number>();
    const freqMapT = new Map<string, number>();

    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        freqMapS.set(s[i], (freqMapS.get(s[i]) || 0) + 1);
        freqMapT.set(t[i], (freqMapT.get(t[i]) || 0) + 1);
    }

    for (const [key, value] of freqMapS) {
        if (freqMapT.get(key) !== value) return false;
    }

    return true;
}
