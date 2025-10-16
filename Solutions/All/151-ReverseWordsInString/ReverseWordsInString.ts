function reverseWords(s: string): string {
    let word = '';
    let wordArr: string[] = [];
    let resultArr: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i].charCodeAt(0) === 32 && word.length) {
            wordArr.push(word);
            word = '';
        } else if (s[i].charCodeAt(0) === 32) continue;
        else {
            word += s[i];
            if (i === s.length - 1) wordArr.push(word);
        }
    }

    for (let i = wordArr.length - 1; i >= 0; i--) {
        resultArr.push(wordArr[i]);
    }

    return resultArr.join(' ');
}
