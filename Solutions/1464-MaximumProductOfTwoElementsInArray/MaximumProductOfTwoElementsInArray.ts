function maxProduct(nums: number[]): number {
    let max: number = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i != j) max = Math.max(max, (nums[i] - 1) * (nums[j] - 1));
        }
    }

    return max;
}
