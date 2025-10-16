export function longestPalindrome(s: string): number {
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
    for (const [_key, value] of charCount.entries()) {
        // Add any potential pairs to palindrome length
        palindromLength += Math.floor(value / 2) * 2;

        // Check for unique character (center of palindrome)
        if (value % 2 === 1 && palindromLength % 2 === 0) {
            palindromLength++;
        }
    }

    return palindromLength;
}

// ccccdd
console.log(longestPalindrome('abccccdd'));
