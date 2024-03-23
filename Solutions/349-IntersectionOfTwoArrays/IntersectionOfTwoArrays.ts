function intersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    let result: number[] = [];

    set1.forEach((num) => {
        if (set2.has(num)) result.push(num);
    });

    return result;
}
