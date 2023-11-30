function hammingWeight(n: number): number {
    let result = 0;

    for (let num of n.toString(2)) num === '1' && result++;

    return result;
}
