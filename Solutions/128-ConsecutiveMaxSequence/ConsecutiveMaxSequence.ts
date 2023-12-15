function longestConsecutive(nums: number[]): number {
    let set = new Set<number>(nums);
    let maxSeq = 0;
    let potentialSeq = 0;

    for (let num of nums) {
        if (!set.has(num - 1)) {
            while (set.has(num + potentialSeq)) {
                potentialSeq++;
            }
            maxSeq = Math.max(maxSeq, potentialSeq);
            potentialSeq = 0;
        }
    }

    return maxSeq;
}
