function pivotIndex(nums: number[]): number {
    let left: number = 0;
    let right: number = 0;

    for (let num of nums) {
        right += num;
    }

    for (let i = 0; i < nums.length; i++) {
        if (left === right - nums[i]) return i;
        else {
            left += nums[i];
            right -= nums[i];
        }
    }

    return -1;
}

// Space Complexity = 0(n)
// Time Complexity = 0(1)
