function mergeAlternately(word1: string, word2: string): string {
    let result = '';
    let i = 0;

    while (i < word1.length && i < word2.length) {
        result += word1[i];
        result += word2[i];
        i++;
    }

    word1.length > i ? (result += word1.slice(i)) : (result += word2.slice(i));

    return result;
}
