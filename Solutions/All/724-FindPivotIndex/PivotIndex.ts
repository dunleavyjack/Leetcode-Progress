function pivotIndex(nums: number[]): number {
    let right = nums.reduce((acc, num) => acc + num);
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        if (right - nums[i] === left) return i;
        else {
            right -= nums[i];
            left += nums[i];
        }
    }

    return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
