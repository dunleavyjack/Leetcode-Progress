export function runningSum(nums: number[]): number[] {
    let sum: number = 0;

    for (let i: number = 0; i < nums.length; i++) {
        let tempNum: number = nums[i];
        nums[i] = nums[i] + sum;
        sum += tempNum;
    }

    return nums;
}
