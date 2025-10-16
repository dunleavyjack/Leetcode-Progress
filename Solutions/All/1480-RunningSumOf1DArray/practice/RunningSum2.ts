export const runningSum = (nums: number[]): number[] => {
    let runningTotal: number = 0;

    for (let i = 0; i < nums.length; i++) {
        nums[i] += runningTotal;
        runningTotal += nums[i] - runningTotal;
    }

    return nums;
};

// Time complexity  = 0(n);
// Space complexity = 0(1);
