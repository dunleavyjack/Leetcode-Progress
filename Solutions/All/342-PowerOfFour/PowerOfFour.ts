function isPowerOfFour(n: number): boolean {
    const logBase4 = Math.log(n) / Math.log(4);
    return Number.isInteger(logBase4);
}
