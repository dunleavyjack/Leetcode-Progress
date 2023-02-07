export function pivotIndex(nums: number[]): number {
    let leftSum: number = 0;
    let rightSum: number = 0;

    // Loop through array and find total sum
    for (let num of nums) {
        rightSum += num;
    }

    for (let i = 0; i < nums.length; i++) {
        let potentialPivot: number = nums[i];
        if (rightSum - potentialPivot === leftSum)
            return i; // index of the pivot
        else {
            rightSum -= potentialPivot;
            leftSum += potentialPivot;
        }
    }
    return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
