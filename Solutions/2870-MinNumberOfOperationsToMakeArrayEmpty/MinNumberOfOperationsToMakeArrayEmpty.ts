function minOperations(nums: number[]): number {
    let freqMap = new Map<number, number>(); // {uniqueNumber, freq}
    let totalOperations = 0;

    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    for (const [num, freq] of freqMap) {
        if (freq === 1) return -1;
        else if (freq % 3 === 0) totalOperations += freq / 3;
        else if ((freq - 2) % 3 === 0) totalOperations += (freq - 2) / 3 + 1;
        else if ((freq - 4) % 3 === 0) totalOperations += (freq - 4) / 3 + 2;
    }

    return totalOperations;
}
