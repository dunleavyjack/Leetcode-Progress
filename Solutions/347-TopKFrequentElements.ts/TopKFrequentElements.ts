function topKFrequent(nums: number[], k: number): number[] {
    let hash = new Map<number, number>();
    let freq = new Array(nums.length + 1).fill([] as number[]);

    for (let num of nums) {
        hash.has(num) ? hash.set(num, hash.get(num)! + 1) : hash.set(num, 1);
    }

    for (let [key, value] of hash) {
        freq[value] = [...freq[value], key];
    }

    let result: number[] = [];
    for (let i = freq.length - 1; i >= 0 && result.length < k; i--) {
        if (freq[i].length !== 0)
            freq[i].forEach((n: number) => result.push(n));
    }

    return result;
}
