function isAnagram(s: string, t: string): boolean {
    let letterFreqS = new Map<string, number>();
    let letterFreqT = new Map<string, number>();

    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        letterFreqS.set(s[i], (letterFreqS.get(s[i]) || 0) + 1);
        letterFreqT.set(t[i], (letterFreqT.get(t[i]) || 0) + 1);
    }

    for (const [key, value] of letterFreqS) {
        if (letterFreqT.get(key) !== value) return false;
    }

    return true;
}
