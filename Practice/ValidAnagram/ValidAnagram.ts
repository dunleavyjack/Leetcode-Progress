function isAnagram(s: string, t: string): boolean {
    let sFreq = new Map<string, number>();
    let tFreq = new Map<string, number>();

    // It't not an anagram if both strings are not the same length
    if (s.length !== t.length) return false;

    // Compare frequency values of each letter in each string
    for (let i = 0; i < s.length; i++) {
        sFreq.set(s[i], (sFreq.get(s[i]) || 0) + 1);
        tFreq.set(t[i], (tFreq.get(t[i]) || 0) + 1);
    }

    // Compare of those freq values are the same
    for (let [key, value] of sFreq) {
        if (tFreq.get(key) !== value) return false;
    }

    return true;
}
