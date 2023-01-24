function isAnagram(s: string, t: string): boolean {
    // Create two maps to track frequency of letters in each string
    let frequencyCounterS = new Map<string, number>();
    let frequencyCounterT = new Map<string, number>();

    // Count freq of letters in s
    for (let i: number = 0; i < s.length; i++) {
        frequencyCounterS.has(s[i])
            ? frequencyCounterS.set(s[i], frequencyCounterS.get(s[i])! + 1)
            : frequencyCounterS.set(s[i], 1);
    }

    // Counter freq of letters in t
    for (let j: number = 0; j < t.length; j++) {
        frequencyCounterT.has(t[j])
            ? frequencyCounterT.set(t[j], frequencyCounterT.get(t[j])! + 1)
            : frequencyCounterT.set(t[j], 1);
    }

    // Compare both frequency counters to see if one letter is used more
    for (let [key, value] of frequencyCounterS) {
        if (frequencyCounterT.get(key) !== value) return false;
    }

    // Check that the lengths are the same (no extra letters) and return
    return frequencyCounterS.size === frequencyCounterT.size ? true : false;
}
