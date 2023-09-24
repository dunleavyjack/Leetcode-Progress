function productExceptSelf(nums: number[]): number[] {
    let result = new Array(nums.length).fill(1);

    let prefix = 1;
    let postfix = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= postfix;
        postfix *= nums[i];
    }

    return result;
}
