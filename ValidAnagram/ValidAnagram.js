/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let frequencyCounterOne = {};
    let frequencyCounterTwo = {};

    for (letter of s) {
        frequencyCounterOne[letter]
            ? (frequencyCounterOne[letter] += 1)
            : (frequencyCounterOne[letter] = 1);
    }

    for (letter of t) {
        frequencyCounterTwo[letter]
            ? (frequencyCounterTwo[letter] += 1)
            : (frequencyCounterTwo[letter] = 1);
    }

    for (val in frequencyCounterOne) {
        if (frequencyCounterOne[val] !== frequencyCounterTwo[val]) {
            return false;
        }
    }

    return true;
};

const input1 = 'anagram';
const input2 = 'nagaram';
console.log(isAnagram(input1, input2));
