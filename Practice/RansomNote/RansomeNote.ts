const canConstruct = (ransomNote: string, magazine: string): boolean => {
    let hashMapOne: any = {};
    let hashMapTwo: any = {};

    for (let char of ransomNote) {
        hashMapOne[char] ? (hashMapOne[char] += 1) : (hashMapOne[char] = 1);
    }

    for (let char of magazine) {
        hashMapTwo[char] ? (hashMapTwo[char] += 1) : (hashMapTwo[char] = 1);
    }

    for (let val in hashMapOne) {
        if (!hashMapTwo[val] || hashMapTwo[val] < hashMapOne[val]) return false;
    }

    return true;
};

const note = 'aa';
const magazine = 'aab';

console.log(canConstruct(note, magazine));
