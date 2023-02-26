function longestPalindrome(s: string): number {
    let freq = new Map<string, number>();
    let result = 0;

    for (let letter of s) {
        freq.has(letter)
            ? freq.set(letter, freq.get(letter)! + 1)
            : freq.set(letter, 1);
    }

    for (const [_letter, letterFrequency] of freq) {
        result += Math.floor(letterFrequency / 2) * 2;

        if (letterFrequency % 2 !== 0 && result % 2 === 0) result++;
    }

    return result;
}
