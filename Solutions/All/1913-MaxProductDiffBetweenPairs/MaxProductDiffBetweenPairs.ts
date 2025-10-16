function maxProductDifference(nums: number[]): number {
    const sorted = nums.sort((a, b) => a - b);
    return (
        sorted[sorted.length - 1] * sorted[sorted.length - 2] -
        sorted[0] * sorted[1]
    );
}
