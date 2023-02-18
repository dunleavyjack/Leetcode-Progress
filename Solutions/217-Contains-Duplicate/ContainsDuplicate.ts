function containsDuplicate(nums: number[]): boolean {
    const uniqueChars = new Set<number>();

    for (let num of nums) {
        if (uniqueChars.has(num)) return true;
        else uniqueChars.add(num);
    }

    return false;
}

// Space complexity -> O(n)
// Time complexity -> 0(n)
