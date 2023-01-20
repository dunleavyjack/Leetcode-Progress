// Solution using set
function containsDuplicateUsingSet(nums: number[]): boolean {
    let frequencyCounter = new Set<number>();

    for (let i = 0; i < nums.length; i++) {
        if (frequencyCounter.has(nums[i])) return true;
        else frequencyCounter.add(nums[i]);
    }

    return false;
}

// Solution using map
function containsDuplicateUsingMap(nums: number[]): boolean {
    let frequencyCounter = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        frequencyCounter.has(nums[i])
            ? frequencyCounter.set(nums[i], frequencyCounter.get(nums[i])! + 1)
            : frequencyCounter.set(nums[i], 1);

        if (frequencyCounter.get(nums[i]) === 2) return true;
    }

    return false;
}
