function longestConsecutive(nums: number[]): number {
    let set = new Set<number>(nums);
    let maxSeq = 0;

    for (let num of nums) {
        if (!set.has(num - 1)) {
            let potentialMaxSeq = 1;
            while (set.has(num + potentialMaxSeq)) potentialMaxSeq++;

            maxSeq = Math.max(potentialMaxSeq, maxSeq);
        }
    }

    return maxSeq;
}
