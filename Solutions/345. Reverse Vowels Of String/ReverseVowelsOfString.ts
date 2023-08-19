function reverseVowels(s: string): string {
    const _vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsInS: string[] = [];

    // Iterate through and find vowels
    for (let letter of s) {
        if (_vowels.includes(letter)) vowelsInS.push(letter);
    }

    for (let i = 0; i < s.length; i++) {
        if (_vowels.includes(s[i])) {
            s[i] = vowelsInS.pop();
        }
    }

    return 'hi';
}
