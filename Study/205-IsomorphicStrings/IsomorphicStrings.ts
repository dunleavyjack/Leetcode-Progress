export {};

const isIsomorphic = (s: string, t: string): boolean => {
    // Safety check
    if (s.length !== t.length) return false;

    // Initialize two hashmaps
    // "foo = {"f": 0}, {"o": 1}
    let hashMapS = new Map<string, number>();
    let hashMapT = new Map<string, number>();

    // Array of characters cast as numbers
    // "food" = [1, 2, 2, 3]
    let sCastAsNum: number[] = [];
    let tCastAsNum: number[] = [];

    // Iterate through s, if character in s hashmap add it's corresponding number
    // to s int array. If not, create a new number to represent it and add to the hash
    // and the num to the array.
    for (let letter of s) {
        if (hashMapS.has(letter)) {
            sCastAsNum.push(hashMapS.get(letter)!);
        } else {
            let newNum: number = hashMapS.size + 1;
            sCastAsNum.push(newNum);
            hashMapS.set(letter, newNum);
        }
    }

    // Same for t as s above
    for (let letter of t) {
        if (hashMapT.has(letter)) {
            tCastAsNum.push(hashMapT.get(letter)!);
        } else {
            let newNum: number = hashMapT.size + 1;
            tCastAsNum.push(newNum);
            hashMapT.set(letter, newNum);
        }
    }

    // Iterate through s int array and see if its same as t int array
    for (let i: number = 0; i < sCastAsNum.length; i++) {
        if (sCastAsNum[i] !== tCastAsNum[i]) return false;
    }

    return true;
};

console.log(isIsomorphic('haa', 'boo'));
