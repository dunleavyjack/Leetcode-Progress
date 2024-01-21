function rob(nums: number[]): number {
    let sum1 = 0;
    let sum2 = 0;

    for (let num of nums) {
        let temp = Math.max(sum1 + num, sum2);
        sum1 = sum2;
        sum2 = temp;
    }

    return sum2;
}
