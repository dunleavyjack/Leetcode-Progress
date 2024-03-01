function missingNumber(nums: number[]): number {
    const sortedNums = nums.sort((a, b) => a - b);

    for (let i = 0; i < sortedNums.length; i++) {
        if (i === 0 && sortedNums[i] !== 0) return 0;

        if (sortedNums[i + 1]) {
            if (sortedNums[i + 1] !== sortedNums[i] + 1)
                return sortedNums[i] + 1;
        } else if (sortedNums.length === 1) {
            if (sortedNums[i] === 0) return 1;
            if (sortedNums[i] === 1) return 0;
        } else {
            return sortedNums.length;
        }
    }

    return -1;
}
