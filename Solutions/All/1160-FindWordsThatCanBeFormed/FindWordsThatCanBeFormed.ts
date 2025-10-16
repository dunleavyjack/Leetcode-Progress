function countCharacters(words: string[], chars: string): number {
    let aCharCode = 'a'.charCodeAt(0);
    let result: number = 0;

    let charsBucket = new Array(26).fill(0);
    for (let letter of chars) charsBucket[letter.charCodeAt(0) - aCharCode]++;

    for (let word of words) {
        let currBucket = new Array(26).fill(0);
        let matchedLetters = 0;

        for (let letter of word) currBucket[letter.charCodeAt(0) - aCharCode]++;

        for (let i = 0; i < currBucket.length; i++) {
            if (
                (currBucket[i] && !charsBucket[i]) ||
                (!currBucket[i] && charsBucket[i]) ||
                currBucket[i] > charsBucket[i]
            ) {
                continue;
            } else if (currBucket[i] && currBucket[i] <= charsBucket[i]) {
                matchedLetters += currBucket[i];
            }
        }

        if (matchedLetters === word.length) result += matchedLetters;
    }

    return result;
}
