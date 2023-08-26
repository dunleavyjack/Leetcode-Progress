function topKFrequent(nums: number[], k: number): number[] {
    const hash = new Map<number, number>();
    const freq = new Array(nums.length + 1).fill([] as number[]);
    const result: number[] = [];

    // Create normal frequency hash table
    for (let num of nums) hash.set(num, hash.get(num)! + 1 || 1);

    // Use the vales of the hash table to create a bucket sort array
    for (const [key, value] of hash) freq[value] = [...freq[value], key];

    // Iterate backwards though the bucket array adding values to the result
    for (let i = freq.length - 1; i >= 0 && result.length < k; i--) {
        freq[i].length && freq[i].forEach((num: number) => result.push(num));
    }

    return result;
}
