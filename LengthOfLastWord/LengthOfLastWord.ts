function lengthOfLastWord(s: string): number {
    // Init a right pointer and result
    let pointer: number = s.length - 1;
    let resultLength: number = 0;

    // Remove any extra spaces at end of word
    while (s[pointer] === ' ') {
        pointer--;
    }

    // Move backwards until reaching a space
    while (s[pointer] !== ' ' && pointer >= 0) {
        resultLength++;
        pointer--;
    }

    // Return result
    return resultLength;
}

console.log(lengthOfLastWord('Hello   '));
