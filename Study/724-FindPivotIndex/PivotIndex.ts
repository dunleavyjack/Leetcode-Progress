function pivotIndex(nums: number[]): number {
    // Get the sum of the entire array
    let totalSum: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        totalSum += nums[i];
    }

    // Starting at 0,
    let leftSide: number = 0;
    let rightSide: number = totalSum;

    for (let i: number = 0; i < nums.length; i++) {
        // Remove pivot array from total and compare both sides
        if (leftSide === rightSide - nums[i]) return i;
        else {
            leftSide += nums[i];
            rightSide -= nums[i];
        }
    }

    // No pivot array found
    return -1;
}

console.log(pivotIndex([1, 2, 3]));
