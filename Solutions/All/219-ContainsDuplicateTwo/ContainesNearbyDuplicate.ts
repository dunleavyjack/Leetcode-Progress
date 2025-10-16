function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let map = new Map<number, number[]>(); // value, indexs
    let result = false;

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.get(nums[i])!.forEach((index) => {
                if (Math.abs(i - index) <= k) result = true;
            });
            map.set(nums[i], [...(map.get(nums[i]) || []), i]);
        } else map.set(nums[i], [i]);
    }

    return result;
}
