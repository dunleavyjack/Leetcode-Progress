function maxProduct(nums: number[]): number {
    let max = 0;
    let maxIndex = 0;

    let secondMax = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            maxIndex = i;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > secondMax && i !== maxIndex) {
            secondMax = nums[i];
        }
    }

    return (max - 1) * (secondMax - 1);
}
