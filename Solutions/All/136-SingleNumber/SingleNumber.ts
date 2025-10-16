function singleNumber(nums: number[]): number {
    let map = new Map<number, number>();

    for (let num of nums) {
        map.has(num) ? map.set(num, map.get(num)! + 1) : map.set(num, 1);
    }

    for (let [key, value] of map) {
        if (value === 1) return key;
    }

    return -1;
}
