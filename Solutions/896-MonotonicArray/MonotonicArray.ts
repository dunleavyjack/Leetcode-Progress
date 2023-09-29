function isMonotonic(nums: number[]): boolean {
    let increasing: boolean | undefined;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            if (increasing === undefined) increasing = true;
            else if (!increasing) return false;
        } else if (nums[i] > nums[i + 1]) {
            if (increasing === undefined) increasing = false;
            else if (increasing) return false;
        }
    }

    return true;
}
