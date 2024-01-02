function findMatrix(nums: number[]): number[][] {
    const freqMap = new Map<number, number>(); // unique num: frequency
    let result: number[][] = [];

    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    for (const [num, freq] of freqMap) {
        for (let i = 0; i < freq; i++) {
            result[i] = [...(result[i] || []), num];
        }
    }

    return result;
}
