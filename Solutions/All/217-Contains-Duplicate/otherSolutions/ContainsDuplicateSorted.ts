function containsDuplicateSorted(nums: number[]): boolean {
    const sortedNums = nums.sort();

    for (let i = 0; i < sortedNums.length - 1; i++) {
        if (sortedNums[i] === sortedNums[i + 1]) return true;
    }

    return false;
}
