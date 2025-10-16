function makeEqual(words: string[]): boolean {
    let letterFreq = new Map<string, number>();

    for (let word of words) {
        for (let letter of word) {
            letterFreq.set(letter, (letterFreq.get(letter) || 0) + 1);
        }
    }

    for (const [_letter, freq] of letterFreq) {
        if (freq % words.length) return false;
    }

    return true;
}
