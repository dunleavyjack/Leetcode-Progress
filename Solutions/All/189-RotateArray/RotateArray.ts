/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    let newResult: number[] = new Array(nums.length);

    for (let i = 0; i < nums.length; i++)
        newResult[(i + k) % nums.length] = nums[i];
    for (let i = 0; i < nums.length; i++) nums[i] = newResult[i];
}
