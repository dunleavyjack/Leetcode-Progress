export function isAnagram(s: string, t: string): boolean {
    // Create two hash maps to track letter frequency in s and t
    let sFrequency = new Map<string, number>();
    let tFrequency = new Map<string, number>();

    // Check lengths match short circut
    if (s.length !== t.length) return false;

    // Iterature through s and t to calculate the freq of each letter
    for (let i = 0; i < s.length; i++) {
        if (sFrequency.has(s[i]))
            sFrequency.set(s[i], sFrequency.get(s[i])! + 1);
        else sFrequency.set(s[i], 1);

        if (tFrequency.has(t[i]))
            tFrequency.set(t[i], tFrequency.get(t[i])! + 1);
        else tFrequency.set(t[i], 1);
    }

    for (let [key, _value] of sFrequency) {
        if (sFrequency.get(key) !== tFrequency.get(key)) return false;
    }

    return true;
}
