export function numIdenticalPairs(nums: number[]): number {
    // 1. Create a freq counter hashmap.
    let freqCounter = new Map<number, number>();

    // 2. Create a value to track the result.
    let numOfPairs = 0;

    // 3. Usual freq counter hashmap. {num: frequency}
    for (let num of nums) freqCounter.set(num, (freqCounter.get(num) || 0) + 1);

    // 4. Iterate through the hashmap.
    //    Calculate all possible pairs.
    for (const [_num, frequency] of freqCounter) {
        // Only care about numbers that appeared more than once.
        // Increase the number of pairs by:
        //      The total frequency times one less than the frequency. Then divided by 2.
        if (frequency > 1) numOfPairs += (frequency * (frequency - 1)) / 2;
    }

    // 5. Return the result.
    return numOfPairs;
}
