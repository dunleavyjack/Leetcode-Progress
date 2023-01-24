export {};

function isSubsequence(s: string, t: string): boolean {
    // Result array to compare with t at end
    let result: string = '';

    // Pointer to keep track of current letter from t
    let letterCounter: number = 0;

    // Iterate through t looking for s
    for (let i: number = 0; i < t.length; i++) {
        if (t[i] === s[letterCounter]) {
            result += t[i];
            letterCounter++;
        }
    }

    // Compare result array from t with s
    return result === s;
}

console.log(isSubsequence('a', 'ba'));
