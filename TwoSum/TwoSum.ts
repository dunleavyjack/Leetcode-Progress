export {};

function twoSum(nums: number[], target: number): number[] {
    let hashMap = new Map<number, number>();
    let result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];

        if (hashMap.has(compliment)) result = [hashMap.get(compliment)!, i];
        else hashMap.set(nums[i], i);
    }

    return result;
}

console.log(twoSum([3, 3], 6));
