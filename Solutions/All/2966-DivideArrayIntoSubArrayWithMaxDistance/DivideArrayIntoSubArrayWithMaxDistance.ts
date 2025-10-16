function divideArray(nums: number[], k: number): number[][] {
    let result: number[][] = [];
    let sortedNums = nums.sort((a, b) => a - b);
    let stack: number[] = [];

    if (sortedNums.length % 3 !== 0) return result;

    for (let num of sortedNums) {
        if (
            (stack[stack.length - 1] && num - stack[stack.length - 1] > k) ||
            (stack[stack.length - 2] && num - stack[stack.length - 2] > k)
        )
            return [];

        stack.push(num);

        if (stack.length === 3) {
            result.push(stack);
            stack = [];
        }
    }

    return result;
}
