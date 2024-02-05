function firstUniqChar(s: string): number {
    const freqMap = new Map<string, number>(); // {character, frequency}

    for (const char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (freqMap.get(s[i]) === 1) return i;
    }

    return -1;
}
