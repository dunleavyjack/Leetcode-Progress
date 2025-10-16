function closeStrings(word1: string, word2: string): boolean {
    let freqW1 = new Map<string, number>();
    let freqW2 = new Map<string, number>();

    if (word1.length !== word2.length) return false;

    for (let i = 0; i < word1.length; i++) {
        freqW1.set(word1[i], (freqW1.get(word1[i]) || 0) + 1);
        freqW2.set(word2[i], (freqW2.get(word2[i]) || 0) + 1);
    }

    const keysW1 = Array.from(freqW1.keys()).sort();
    const keysW2 = Array.from(freqW2.keys()).sort();

    const valuesW1 = Array.from(freqW1.values()).sort();
    const valuesW2 = Array.from(freqW2.values()).sort();

    if (
        keysW1.join('') !== keysW2.join('') ||
        valuesW1.join('') !== valuesW2.join('')
    )
        return false;

    return true;
}
