const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSubArray = (nums) => {
    let max = nums[0];
    let current = max;

    for (let i = 1; i < nums.length; i++) {
        current = Math.max(nums[i] + current, nums[i]);
        max = Math.max(current, max);
    }

    return max;
};

console.log(maxSubArray(nums));
