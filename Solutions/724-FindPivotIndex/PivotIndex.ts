function pivotIndex(nums: number[]): number {
    let left: number = 0;
    let right: number = nums.reduce(
        (totalSum, currentNum) => (totalSum += currentNum)
    ); // Represent total sum of all numbers

    for (let i = 0; i < nums.length; i++) {
        if (left === right - nums[i]) return i;
        else {
            left += nums[i];
            right -= nums[i];
        }
    }

    return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
