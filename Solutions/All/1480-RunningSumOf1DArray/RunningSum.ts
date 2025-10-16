function runningSum(nums: number[]): number[] {
    let sum: number = 0;

    for (let i: number = 0; i < nums.length; i++) {
        sum += nums[i];
        nums[i] = sum;
    }

    return nums;
}

// Time complexity  = 0(n);
// Space complexity = 0(1)
