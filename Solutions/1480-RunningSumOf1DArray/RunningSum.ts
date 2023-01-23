const runningSum = (nums: number[]): number[] => {
    let runningTotal = 0;

    for (let i = 0; i < nums.length; i++) {
        // Add running total the num
        nums[i] = nums[i] + runningTotal;

        // Increment the running total but only by the last num
        runningTotal += nums[i] - runningTotal;
    }

    return nums;
};

console.log(runningSum([1, 2, 3, 4]));
