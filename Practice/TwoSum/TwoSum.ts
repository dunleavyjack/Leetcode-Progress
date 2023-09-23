export {};

function twoSum(nums: number[], target: number): number[] {
    let compliments = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        if (compliments.has(nums[i])) return [compliments.get(nums[i])!, i];
        else compliments.set(target - nums[i], i);
    }

    return [-1, -1];
}
