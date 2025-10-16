function reverseVowels(s: string): string {
    const vowels = new Set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']);
    let vowelsStack: string[] = [];
    let result: string = '';

    for (let letter of s) {
        vowels.has(letter) && vowelsStack.push(letter);
    }

    for (let i = 0; i < s.length; i++) {
        vowels.has(s[i]) ? (result += vowelsStack.pop()) : (result += s[i]);
    }

    return result;
}
