function partitionString(s: string): number {
    let stack: string = '';
    let result: number = 0;

    for (let letter of s) {
        if (stack.includes(letter)) {
            result++;
            stack = letter;
        } else {
            stack += letter;
        }
    }
    if (stack.length) result++;
    return result;
}
