function longestPalindrome(s: string): number {
    let palindromLength: number = 0;
    let charCount = new Map<string, number>();

    // Count occurrence of each character in string
    for (let letter of s) {
        if (charCount.has(letter)) {
            const currentCount: number = charCount.get(letter)!;
            charCount.set(letter, currentCount + 1);
        } else {
            charCount.set(letter, 1);
        }
    }

    // Find character pairs
    for (const [_key, letterFrequency] of charCount.entries()) {
        palindromLength += Math.floor(letterFrequency / 2) * 2;

        // Check if there is a leftover character to use as palindrome's center
        if (letterFrequency % 2 === 1 && palindromLength % 2 === 0) {
            palindromLength++;
        }
    }

    return palindromLength;
}
