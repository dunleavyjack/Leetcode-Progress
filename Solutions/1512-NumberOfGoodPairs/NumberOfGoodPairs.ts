function numIdenticalPairs(nums: number[]): number {
    let freqCounter = new Map<number, number>();
    let numOfPairs = 0;

    for (let num of nums) freqCounter.set(num, (freqCounter.get(num) || 0) + 1);

    for (const [_num, frequency] of freqCounter) {
        if (frequency > 1) numOfPairs += (frequency * (frequency - 1)) / 2;
    }

    return numOfPairs;
}
