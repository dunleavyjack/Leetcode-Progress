function findErrorNums(nums: number[]): number[] {
    const set = new Set<number>();
    let sum = 0;
    let result = new Array(2);

    for (let num of nums) {
        sum += num;

        if (set.has(num)) result[0] = num;
        else set.add(num);
    }

    result[1] = (nums.length * (nums.length + 1)) / 2 - (sum - result[0]);

    return result;
}
