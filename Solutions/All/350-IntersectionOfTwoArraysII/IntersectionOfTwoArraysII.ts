function intersect(nums1: number[], nums2: number[]): number[] {
    let freqMap = new Map<number, number>();
    let result: number[] = [];

    for (const num of nums1) {
        freqMap.set(num, freqMap.get(num)! + 1 || 1);
    }

    for (const num of nums2) {
        if (freqMap.has(num)) {
            result.push(num);

            freqMap.get(num) === 1
                ? freqMap.delete(num)
                : freqMap.set(num, freqMap.get(num)! - 1);
        }
    }
    return result;
}
