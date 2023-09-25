function productExceptSelf(nums: number[]): number[] {
    /**
     * Create an array with the same length a the nums array
     *
     * Fill it with `1` since this problem requires multiplication.
     * */
    let result = new Array(nums.length).fill(1);

    /**
     * Initialize a starting prefix value.
     */
    let prefix = 1;

    /**
     * Initialize a starting postfix value.
     */
    let postfix = 1;

    /**
     * Iterate forwards through the num array.
     *
     * Update the current value in `result` to be the prefix.
     *
     * Update the value of `prefix` to be the product of itself and current value of `nums`
     */
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    /**
     * Iterate backwards through the num array.
     *
     * Update the current value in `result` to be the product of the current result value and the postfix.
     *
     * Update the value of `postfix` to be the product of itself and the current value of `nums`
     */
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= postfix;
        postfix *= nums[i];
    }

    /**
     * Return the result
     */
    return result;
}
